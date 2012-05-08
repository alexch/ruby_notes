!SLIDE subsection
# More Neat Things About Ruby

This section is a continuation of "ruby intro", covering more advanced topics. It is still intended as a brief, lightweight overview of the Ruby language; following sections will cover all these topics in much more detail. 

# Every statement has a value

    @@@ ruby
    if summer?
      temp = 80
    else
      temp = 50
    end

    temp = if summer?
      80
    else
      50
    end

# Everything is an object

    @@@ ruby
    "test".upcase   #=> "TEST"
    "test".class    #=> String

    "test".methods
    2.methods
    
    1.to_s       #=> "1"
    "1".to_i     #=> 1
    :hello.class #=> Symbol

# Operators are Methods

Equivalent:

    @@@ ruby
    1 + 2
    1.+(2)
    1.send "+", 2

> send the object `1` the message `+` with the parameter `2`

!SLIDE incremental

<!SLIDE incremental>
# The Default Block

* Methods can take block arguments
* Use either `do...end` or `{...}` at the very end of the argument list
* Inside the method, call the default block with `yield`

# Iterators use the Default Block

    @@@ ruby
    fruits = ["apple", "banana", "cherry", "date"]
    fruits.each do |item|        #<< "do" starts the block
      puts "Yum! I love #{item}s!"
    end                            #<< "end" ends the block   

# Array Iterators

    @@@ ruby
    my_array = ["cat", "dog", "world"]
    my_array.each do |item|
      puts "hello " + item
    end
    
* calls the block with `item = "cat"`
* then calls the block with `item = "dog"`
* then calls the block with `item = "world"`

# Reopening classes

    @@@ ruby
    class Fixnum
      def divisible_by? n
        self % n == 0
      end
    end

    4.divisible_by? 2 #=> true
    4.divisible_by? 3 #=> false

# Duck Typing

* If it looks like a duck...
* and it quacks like a duck...
* then it is a duck!
* In other words
  * we don't care what an object is; 
  * we care what it does

# duck typing example

    @@@ ruby
    def print_even_or_odd(collection)
      collection.each do |item|
        puts "#{item} is #{item.even? ? "even" : "odd"}."
      end
    end

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

!SLIDE incremental
# No Function Overloading

* Some OO languages allow several methods with the same name but different parameters...
* ...but not Ruby!
* If you redefine a method, the new one *replaces* the old one
* There are tricks to save the old method if you need to call it
  * `alias`, `alias_method`, `alias_method_chain`

# Operator Overriding

* operators like `+`, `*`, `<<`, etc. are defined as methods
* they can be overridden like any method
* `String` has some great ones

        "abc" * 3           #=> "abcabcabc"
        "abc" << "def"      #=> "abcdef"
        "%d live crew" % 2  #=> "2 live crew"

