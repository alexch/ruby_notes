<!SLIDE subsection>
# Class Methods and Constants

"class methods" are actually

  * instance methods
  * on the eigenclass
  * of the class object


# Defining class methods 
## (from outside the class)

    @@@ ruby
    def Person.oldest(people)
      people.sort_by {|p| p.age}.last
    end

## (from inside the class)

    @@@ ruby
    class Person
      def self.oldest(people)
        people.sort_by {|p| p.age}.last
      end
    end

* `self` points to the *class* inside a class definition... 
* ...so `def self.oldest` is the same as `def Person.oldest`

---

* By the way, here's an even cooler way to implement that method:

        people.max_by(:&age)
         
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
    
    >> alice = Person.new("Alice", "Andrews", 17)
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

