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

# Constructor? I just met 'er!

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

# Reopening classes

* in Ruby, classes can be opened anywhere
* possible to make additions or changes

        @@@ ruby
        class Student
          def last_name
            @last_name
          end
        end
        class Student
          def first_name
            @first_name
          end
        end

# Monkey Patching

* Reopening a system or library class is known pejoratively as Monkey Patching
* Very powerful & dangerous technique

> **With great monkey power comes great monkey responsibility.**
>
> &nbsp; - Spider Monkey

<!SLIDE subsection >
# Class Inheritance

<!SLIDE>
If class B inherits from class A

then instances of B have the behaviors

of both class A and class B

<!SLIDE>
# Inheritance Example

    @@@ ruby
    class Publication
      attr_accessor :publisher
    end
    class Magazine < Publication
      attr_accessor :editor
    end

    m = Magazine.new
    m.publisher = "Time Inc."

    m.is_a? Magazine #=> true
    m.is_a? Publication #=> true
    
<!SLIDE>
* `<` is pronounced "inherits from"
* not to be confused with "extends" which is for modules

<!SLIDE incremental>
# Single vs. Multiple Inheritance
* Ruby has *single inheritance*
  * each class has one and only one parent class
  * [except for BasicObject]
* Ruby can simulate *multiple inheritance* using Modules
  * more later

<!SLIDE>
# Inheritance Example

    @@@ ruby
    class Rectangle
      def initialize(width, height)
        @width, @height = width, height
      end
      def area
        @width * @height
      end
    end
    class Square < Rectangle
      def initialize(width)
        super(width, width)
      end
    end

    Square.new(10).area #=> 100

<!SLIDE>

# A Design Note

* inheritance is often more trouble than it's worth
* there are many ways to solve object-oriented design problems
* also try *delegation*, *configuration*, etc.

# Faster than a speeding bullet
# More powerful than a locomotive
# Able to leap tall buildings with a single bound
# Look! Up in the sky!
# It's a bird!
# It's a plane!
# It's...

<!SLIDE incremental>
# super
* `super` jumps up and calls the next method with the same name as this one

#
* `super` with some arguments passes those arguments
* `super` with no arguments passes the same arguments that were originally passed to this method
* `super()` with an empty argument list calls the parent method with *no* arguments
  * needed to resolve the ambiguity of the bareword `super` call

# `method_missing`

If method dispatch fails, then it starts all over again!

Only this time it's looking for a method named `method_missing`

Useful for "builder pattern" objects

# `method_missing` + `super`

From inside `method_missing`, `super` looks up the chain for another `method_missing` method

Allows chaining/overriding of `method_missing` calls, or fallback to `NoMethodError`

<!SLIDE>
# Defining class methods (outside)

    @@@ ruby
    def Person.oldest(people)
      people.max_by(:&age)  # nevermind
    end

# Defining class methods (inside)

    @@@ ruby
    class Person
      def self.oldest(people)
        people.max_by(:&age)  # nevermind
      end
    end

Remember, `self` points to the *class* inside a class definition.

# Uses of class methods

* utility functions
* factories
* counters

# Factories

    @@@ ruby
    class Person
      def self.from_string(s)
        tokens = s.split    
        new(tokens[0], tokens[1], tokens[2].to_i)
      end
      def initialize(first, last, age)
        @first, @last, @age = first, last, age
      end
    end

    >> alice = Person.from_string("Alice Andrews 17")
    => #<Person:0x000001009eca90 
       @first="Alice", @last="Andrews", @age=17>
       
    >> bob = Person.from_string("Bob Barker 67")
    => #<Person:0x000001009e3af8 
       @first="Bob", @last="Barker", @age=67>

# Counters

    @@@ ruby
    class Person
      @count = 0 # instance variable of the class Person
      
      def self.one_more
        @count += 1
      end
  
      def self.count
        @count  
      end

      def initialize(first, last, age)
        @first, @last, @age = first, last, age
        Person.one_more
      end
    end

# Class Constants

By convention, constants who are values are in `ALL_CAPS`, and constants who are modules or classes are in `CamelCase`

    @@@ ruby
    class Person
      DEFAULT_AGE = 18

      # inside the class, can be named directly 
      def initialize(first, last, age = DEFAULT_AGE)
        @first, @last, @age = first, last, age
      end
    end

    # outside the class, must be scoped with ::
    Person::DEFAULT_AGE  #=> 18

# Predefined Constants

    Math::PI
    RUBY_VERSION
    RUBY_RELEASE_DATE

<!SLIDE subsection>
# Classes as objects

<!SLIDE>

    @@@ ruby
    class Person

is syntactic sugar

same as

    @@@ ruby
    Person = Class.new

Note that `Person` is just a regular constant!


<!SLIDE>

    @@@ ruby
    class Person
      def name
        "Alice"
      end
    end

same as...

    @@@ ruby
    Person = Class.new
    Person.class_eval do
      def name
        "Alice"
      end
    end

