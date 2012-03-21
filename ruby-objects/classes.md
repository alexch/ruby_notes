<!SLIDE subsection>
# Classes and Instances

Ref. WGR Chapter 3, Organizing objects with classes

<!SLIDE incremental>
# The Cookie Metaphor

* a class is a cookie cutter
* an instance is a cookie
* memory is cookie dough
* state is frosting
* users are hungry!

# Constructors

* To *instantiate* an object, call the *new* method on its class
* The *new* method then calls *initialize*

        @@@ ruby
        class Thing
          def initialize
            puts "Hi!"
          end
        end

        thing = Thing.new  # *not* Thing.initialize!

# What does `new` do?

1. allocates memory for the instance
2. calls *initialize* on the new instance
3. returns a pointer to the instance

So by the time assignment (`=`) happens, the object has been constructed.

# Instance methods

* defined inside the class
* instance methods are shared among all instances
* same behavior, but different data

```
@@@ruby
class Cookie
  def bake
    @temp = 350
  end
end
```

# Instance variables

* represent object state
* names start with an `@`
* only visible inside the object
  * i.e. when `self` is that object

# Getter and setter methods

    @@@ ruby
    class Person
      def age=(years_old)
        @age = years_old
      end
      def age
        @age
      end
    end

    alice = Person.new
    alice.age= 17
    alice.age #=> 17

    alice.@age #=> SyntaxError

# Ruby's setter sugar

`alice.age = 17`

is the same as

`alice.age=(17)`

* Technically, it's not an assignment, it's a method call
* ...but it looks like an assignment!
  * that's called "syntactic sugar" since it makes the syntax sweeter

# The setter gotcha

* Inside an object, you can't call that object's setter methods directly

```
@@@ruby
class Person
  def age=(years_old)
    @age = years_old
  end
  def bar_mitzvah!
    age = 13   # oops
  end
end
```

* Why not?
  * Because "`age = 13`" looks like a *local variable* assignment, which takes precedence
  * It _eclipses_ the setter method!
  * Syntax ambiguity! Oh noes!

# The setter gotcha solved

* Solution: use "`self.age`"
  * that forces it to be a method call
* or `@age`
  * that's a direct instance variable reference

```
@@@ruby
class Person
  def age=(years_old)
    @age = years_old
  end
  def bar_mitzvah!
    self.age = 13
  end
end
```

# Attributes

* An *attribute* is a property with named getter and/or setter methods
* Usually corresponds to an instance variable

# Attribute Shortcuts

    @@@ ruby
    class Thing
      attr_reader :age    #  def age; @age; end
      attr_writer :age    #  def age=(x); @age = x; end
      attr_accessor :age  # both of the above
    end

# Constructor plus Attributes

    @@@ruby
    class Person
      attr_accessor :age
      def initialize
        @age = 20
      end
    end

    alice = Person.new
    alice.age #=> 20

# Attribute Shortcuts (cont.)
* Can also take multiple arguments

        @@@ ruby
        class Thing
          attr_accessor :foo, :bar
        end

# Attribute Shortcuts (cont.)
        
* Wait a second!
* Q: Where are `attr_reader` _et al._ defined?
* A: They are *class methods* of `Object`
* A: Or maybe they're *instance methods* of `Class`; I'm not sure.

# Attribute Shortcuts (cont.)
        
* Sadly, `attr_accessor` is misnamed
* "accessor" means `reader`, but `attr_accessor` makes a reader *and* a writer
* Should have been called just `attribute`

# Lazy Initialization with Or-Equals

```
@@@ruby
class Cookie
  def chips
    @chips ||= 10
  end
end
```

# Query methods

    @@@ ruby
    class Person
      def child?
        @age < 18
      end
    end

    alice.age = 16
    alice.child? #=> true
    
Note: query methods return a boolean by *convention* only

# Bang methods

    @@@ ruby
    class Person
      def birthday!
        @age = @age + 1
      end
    end

* "`!`" is pronounced "bang"
* usually means "watch out" or "destructive" or "side effect"
  * could also mean "may raise an exception"
  * no real rule, so watch out
* normally there's a non-bang equivalent
* in ActiveRecord, "`!`" means: raise exception if failure

# Object equality

* Many ways to compare objects
  * `==` params are equal (overridable)
  * `.eql?` params are equal *and* the same type
  * `.equal?` params are identical (same `object_id`)
* `==` is what you want, unless you know otherwise

# A Poorly-Encapsulated Object

    @@@ruby
    class BadStudent
      attr_accessor :first_name, :last_name
    end

    joe = BadStudent.new
    joe.first_name = "Joe"
    joe.last_name = "Blow"
    puts joe.first_name + " " + joe.last_name


# A Well-Encapsulated Object

    @@@ruby
    class GoodStudent
      def initialize first_name, last_name
        @first_name, @last_name = first_name, last_name
      end

      def full_name
        "#{@first_name} #{@last_name}"
      end
    end

    jane = GoodStudent.new("Jane", "Brain")
    puts jane.full_name


* Why is this well-encapsulated?
  * initial state established by constructor
  * internal state used by methods, not exposed by getters
  * other objects do not have *direct* access to its internal state
  * if requirements change, code only changes in one place
     * e.g. adding a middle name
* Both *shorter* and *safer* than a poorly-encapsulated object

