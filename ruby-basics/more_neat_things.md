!SLIDE subsection
# More Neat Things About Ruby
## (If You Think Programming Languages Are Neat)

This section is a continuation of "ruby intro", covering more advanced topics. It is still intended as a brief, lightweight overview of the Ruby language; following sections will cover all these topics in much more detail. 

# Everything is an object

    @@@ ruby
    "test".upcase   #=> "TEST"
    "test".class    #=> String

    "test".methods
    2.methods
    
    1.to_s       #=> "1"
    "1".to_i     #=> 1
    :hello.class #=> Symbol

# Methods are messages

    @@@ ruby
    thing.do(4)
    thing.do 4
    thing.send "do", 4

# Operators are Methods

    @@@ ruby
    1 + 2
    1.+(2)
    1.send "+", 2

# Array Iterators

    @@@ ruby
    my_array = ["cat", "dog", "world"]
    my_array.each do |item|
      puts "hello " + item
    end

# Hash Iterators

    @@@ ruby
    my_hash = { :type => "cat",
                :name => "Beckett",
                :breed => "alley cat" }
    my_hash.each do |key, value|
      puts "My " + key.to_s + " is " + value
    end

<!SLIDE incremental>
# The Default Block

* Methods can take block arguments
* Use either `do...end` or `{...}` at the very end of the argument list
* Inside the method, call the default block with `yield`

# Iterators use the Default Block

    @@@ ruby
    fruits = ["apple, "banana", "cherry", "date"]
    my_array.each do |item|        #<< start of default block
      puts "Yum! I love #{item}!"
    end                            #<< end of default block   

# Blocks are like mini-functions

* Blocks can also take parameters or return a value
* e.g. the `map` iterator translates each item in an array into a new array

        @@@ ruby
        >> ["hello", "world"].map {|string| string.upcase}
        => ["HELLO", "WORLD"]

* `{|string| string.upcase}` defines a block


!SLIDE incremental

# duck typing

* If it looks like a duck...
* and it quacks like a duck...
* then it is a duck!
* In other words, we don't care what an object is as long as it does what we want

# duck typing example

    @@@ ruby
    def print_even_or_odd(collection)
      collection.each do |item|
        puts "#{item} is #{item.even? ? "even" : "odd"}."
      end
    end

!SLIDE

    @@@ ruby
    print_even_or_odd [1, 2, 3]
    print_even_or_odd 1..3

!SLIDE incremental

# Modules and Mixins

* Any class (or object) can *include* a Module
  * also known as *mixing in*
  * so Modules are also called *mixins*
* Modules provide *behavior* but no *state*
  * more precisely, they affect the extending object's state
* Provides most of the power of multiple inheritance, but less confusing

!SLIDE
# Array Assignment

    @@@ ruby
    @width, @height = width, height
    @width, @height = [width, height]

    def dimensions
      [10, 20]
    end
    @width, @height = dimensions

!SLIDE

# Metaprogramming

* macros (class methods)
  * `attr_accessor`
  * `has_many`

!SLIDE incremental
# Classes are objects

* class methods are really just methods on the class object
* code evaluated in the scope of a class definition acts on the class object

!SLIDE
# Domain-Specific Languages (DSLs)

* Rails
* Rake
* Cucumber
* Rspec
* etc.

!SLIDE

# the `method_missing` method

!SLIDE incremental

# private vs public

* Private really just means "please don't come in."
* If someone has access to your runtime environment, they are trusted.
* Spend your time writing code (and testing it), not protecting yourself from other code

!SLIDE
# Reopening classes

    @@@ ruby
    class Fixnum
      def even?
        self % 2 == 0
      end
    end

    1.even? #=> false

!SLIDE
# or-equals

    def name
      @name ||= "Anonymous"
    end
    
* Means "if @name has a value, use it, but otherwise make it 'Anonymous'"
* Relies on "logical or" and "nil is false" semantics
* There's also "plus-equals" (`+=`) and so forth

