<!SLIDE subsection>
# Code Blocks

Ref. WGR Section 6.3, "Iterators and code blocks"

# First-Class Functions

* `do...end` defines a *block*
* also known as a *closure* or a *proc* or a *lambda* or a *function pointer*

# do...end vs {...}

* Anywhere you see "do" in Ruby, it's the start of a *block*

        @@@ruby
        3.times do 
          puts "Hip! Hip! Hooray!"
        end

* Blocks can also be wrapped in curly braces

        @@@ruby
        3.times { puts "Hip! Hip! Hooray!" } 

* By convention, braces are for a single line, do...end for multiple lines

# What are blocks like?

* anonymous functions
* function pointers
* callbacks
* runnable objects

# What are blocks for?

> A block is a piece of code that is declared but not run in the place it's written. The idea is to leave it up to the receiver of the block to decide when to call it.
>
> -- Wolfram Arnold

# The Default Block

* Every method, no matter what its parameter list, might get an optional magic block parameter
* This is called "the default block" and the method can call it using `yield`

        @@@ ruby
        def foo
          yield
        end
    
        foo do
          puts "hi"
        end

# `yield` calls the default block

    @@@ ruby
    def twice
       yield
       yield
    end

    twice do
      puts "hi"
    end

"twice do" kind of almost resembles English a little, right?



# Blocks can accept parameters

    @@@ ruby
    def foo
      yield "alice"
      yield "bob"
    end

    foo do |name|
      puts "hi, #{name}"
    end

# Block parameters vs. Function parameters

    @@@ ruby
    # for_each is a less cool version of `each`
    def for_each(array)
      i = 0
      while i < array.size
        yield array[i]
        i += 1
      end
    end

    a = ["alice", "bob", "charlie"]
    for_each(a) do |item|
      puts "hi, #{item}"
    end

* `array` is a parameter to the `for_each` function
* `item` is a parameter to the block

# Making the default block visible

`&` turns a default block into a proc

    @@@ ruby
    def for_each(array, &block)
      i = 0
      while i < array.size
        block.call(array[i])
        i += 1
      end
    end
    
    a = ["alice", "bob", "charlie"]
    for_each(a) do |item|
      puts "hi, #{item}"
    end

# You can also use & in the caller

turns a proc into a default block

    p = proc {|w|w.capitalize}
    s.split.map(&proc).join

# `&` vs. `yield`

Which is less confusing, `&` or `yield`?

    def reverser &default_block
      default_block.call.reverse
    end

    def reverser
      yield.call.reverse
    end


# block_given?
* `block_given?` is true if a block was passed

