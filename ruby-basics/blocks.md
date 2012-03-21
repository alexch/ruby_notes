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

# `proc`

* The `proc` keyword defines a block
* You can store that block into a variable
* You can call that block with the `call` method

```
@@@ruby
say_hi = proc { puts "hi" }
say_hi.call  # prints "hi\n"
```

## procs can take parameters too

```
@@@ruby
capitalize_it = proc { |word| word.capitalize }
capitalize_it.call("banana")   #=> "Banana"
capitalize_it.call("cherry")   #=> "Cherry"
```

# Passing Blocks to Methods Explicitly with Procs

`twice_do` is a less cool version of `times` that takes a proc parameter

    @@@ ruby
    def twice_do(action)
      action.call
      action.call
    end

You can assign a proc to a variable and pass it as a parameter

    say_hi = proc do
      puts "hi!"
    end
    twice_do(say_hi)  # prints "hi!\n" twice

You can also define proc *inline* rather than assigning it to a variable

    twice_do(proc do
      puts "hi!"
    end)  # prints "hi!\n" twice


# The Default Block

* Every method, no matter what its parameter list, might get an optional magic invisible block parameter
* This is called "the default block" and the method can call it using `yield`

# Passing Blocks to Methods Implicitly with the Default Block

`twice` is a less cool version of `times` that takes a default block (invisible parameter)

    @@@ ruby
    def twice
       yield
       yield
    end

    twice do
      puts "hi!"
    end

"twice do" kind of almost resembles English a little, right?

# The default block can accept parameters

    @@@ ruby
    def foo
      yield "alice"
      yield "bob"
    end

    foo do |name|
      puts "hi, #{name}"
    end

# Passing Blocks Implicitly

`for_each` is a less cool version of `each` that uses the default block

    @@@ ruby
    def for_each(array)
      i = 0
      while i < array.size
        yield array[i]
        i += 1
      end
      array
    end

    names = ["alice", "bob", "charlie"]
    for_each(names) do |item|
      puts "hi, #{item}"
    end

* `array` is a parameter to the `for_each` function
* `item` is a parameter to the block

# Making the default block visible

`&` turns the default block into a proc

    @@@ ruby
    def for_each(array, &p)
      i = 0
      while i < array.size
        p.call(array[i])
        i += 1
      end
      array
    end

    a = ["alice", "bob", "charlie"]
    for_each(a) do |item|
      puts "hi, #{item}"
    end

# You can also use & in the caller

turns a proc into a default block

    capitalize_word = proc {|w|w.capitalize}
    s.split.map(&capitalize_word).join

# `&` vs. `yield`

Which is less confusing, `&` or `yield`?

    def reverser &default_block
      default_block.call.reverse
    end

    def reverser
      yield.reverse
    end


# block_given?
* `block_given?` is true if a block was passed

