<!SLIDE subsection>
# Code Blocks

Ref. WGR Section 6.3, "Iterators and code blocks"

# do...end

    @@@ruby
    3.times do 
      puts "Hip! Hip! Hooray!"
    end

* Anywhere you see "do" in Ruby, it's the start of a *block*
* Also known as a *closure* or a *proc* or a *lambda*
* Blocks 

# {...}

    @@@ruby
    3.times { puts "Hip! Hip! Hooray!" } 

* Blocks can also be wrapped in curly braces
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

Which is less confusing, `&` or `yield`?
