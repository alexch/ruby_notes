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

<!SLIDE incremental>
# The Linugistic Metaphor

* Objects are nouns
* Methods are verbs
* Attributes are adjectives

# Constructors

* To *instantiate* an object, call the *new* method on its class
* *new* does some stuff then turns around and calls *initialize* on the new instance

        @@@ ruby
        class Thing
          def initialize
            puts "Hi!"
          end
        end

        thing = Thing.new  # *not* Thing.initialize!

# Instance methods

* defined inside the class
* instance methods are shared among all instances
* same behavior, but different data

# Instance variables

* represent object state
* names start with an `@`
* only visible inside the object
  * i.e. when `self` is that object

<!SLIDE >
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
    alice.age = 17
    alice.age #=> 17
    alice.@age #=> SyntaxError

<!SLIDE >
# Setter sugar

`alice.age=(17)`

is the same as

`alice.age = 17`

* Technically, it's not an assignment, it's a method call
* But it looks like an assignment!

<!SLIDE >
# The setter gotcha

* Inside an object, you can't call that object's setter methods directly
* Why not?
  * Because "`age = 2`" looks like a *local variable* assignment, which takes precedence
  * It _eclipses_ the setter method!
  * Syntax ambiguity! Oh noes!
* Solution: use "`self.age = 2`"

<!SLIDE >
# Attributes

* An *attribute* is a property with named getter and/or setter methods
* Usually corresponds to an instance variable

<!SLIDE >
# Attribute Shortcuts

        @@@ ruby
        class Thing
          attr_reader :foo  #=>  def foo; @foo; end
          attr_writer :foo  #=>  def foo=(x); @foo = x; end
          attr_accessor :foo  #=> both of the above
        end

<!SLIDE >
# Attribute Shortcuts (cont.)
* Can also take multiple arguments

        @@@ ruby
        class Thing
          attr_accessor :foo, :bar
        end

<!SLIDE >
# Attribute Shortcuts (cont.)
        
* Wait a second!
* Q: Where are `attr_reader` _et al._ defined?
* A: They are *class methods* of `Object`

<!SLIDE >
# Attribute Shortcuts (cont.)
        
* Sadly, `attr_accessor` is misnamed
* "accessor" means `reader`, but `attr_accessor` makes a reader *and* a writer
* Should have been called just `attribute`

# Query methods

    @@@ ruby
    class Person
      def child?
        @age < 18
      end
    end

    alice.age = 16
    alice.child? #=> false
    
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

# An Elegant Object

    @@@ruby
    class Student
      def initialize first_name, last_name
        @first_name = first_name
        @last_name = last_name
      end
  
      def name
        "#{@first_name} #{@last_name}"
      end
    end

* Why "elegant"?
  * initial state established by constructor
  * internal state used by methods, not exposed by getters

