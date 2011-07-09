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

# {...}

    @@@ruby
    3.times { puts "Hip! Hip! Hooray!" } 

* Blocks can also be wrapped in curly braces
* By convention, braces are for a single line, do...end for multiple lines

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

# Block parameters

    @@@ ruby
    def foo
      yield "alice"
      yield "bob"
    end

    foo do |name|
      puts "hi, #{name}"
    end

