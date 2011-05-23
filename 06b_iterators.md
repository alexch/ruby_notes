
<!SLIDE subsection>
# Code Blocks

# do...end

    @@@ruby
    3.times do 
      puts "Hip! Hip! Hooray!"
    end

* Anywhere you see "do" in Ruby, it's the start of a *block*
* Also known as a *closure*

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

!SLIDE subsection
# Iterators

# `times` is on your side

    @@@ruby
    class Integer
      def my_times
        i = 0
        until i == self
          yield i
          i += 1
        end
      end
    end
    
    potatoes = nil
    3.my_times do |i|
      potatoes = i+1
      puts "#{potatoes} potato"
    end
    puts potatoes + 1

# to `each` his own

    @@@ruby
    class Array
      def my_each
        i = 0
        until i == size
          yield self[i]
          i += 1
        end
      end
    end

    ["apple", "banana", "cherry"].my_each do |fruit|
      puts "I love #{fruit}!"
    end

# the `map` is not the territory

    @@@ruby
    class Array
      def my_map
        a = []
        each do |item|
          a << yield(item)
        end
        a
      end
    end

    ["apple", "banana", "cherry"].my_map do |fruit|
      fruit.reverse
    end
    => ["elppa", "ananab", "yrrehc"]
    
# Other Awesome Iterators

* `select`
  * returns items for whom the block returns true(ish)
* `reject`
  * returns items for whom the block returns true(ish)
* `collect` (aka `map`)
  * makes a new array out of whatever the block returns
* `detect` (aka `find`)
  * returns a single item, the first for whom the block returns true(ish)
* `inject`
  * accumulates (huh?)

<http://matthewcarriere.com/2008/06/23/using-select-reject-collect-inject-and-detect/>

!SLIDE
>  Not marble, nor the gilded monuments
>
>  Of princes, shall outlive this powerful rhyme;
>
>  But you shall shine more bright in these contents
>
>  Than unswept stone, besmear'd with sluttish time.

Shakespeare, Sonnet 55

# lethal `inject`ion

* `inject` is a really fun iterator, but it's really weird
* it passes a persistent "accumulator" to each iteration
* the return value of the block becomes the next accumulator
* `sum` is a good example:

      @@@ruby
      class Array
        def sum
          inject(0) {|acc,n| acc + n}
        end
      end
      
      [1,2,3].sum #=> 6


      