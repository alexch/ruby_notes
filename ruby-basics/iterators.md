<!SLIDE subsection>
# Iterators 
 
Ref. WGR Section 6.3, "Iterators and code blocks"

# Loops as Methods

* An Iterator is a method that allows you to loop through all the members of a collection
* Works like "for" or "while" but without any extra language keywords
* It executes a *block* again and again
* Usually this block is the *default block*
  * this lets you define the block **during** the method call
  * concise and readable (arguably)

# `times` is on your side

    potatoes = nil
    3.my_times do |i|
      potatoes = i+1
      puts "#{potatoes} potato"
    end
    puts potatoes + 1

# implementing `times` using `until`

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
    

# to `each` his own

    ["apple", "banana", "cherry"].my_each do |fruit|
      puts "I love #{fruit}!"
    end

# warning: each returns the *collection*, not the *value*

    def count_chars strings
      c = 0
      strings.each do |s|
        c += s.length
      end
      c
    end

    count_chars ["apple", "banana", "cherry"]
    => 17

# implementing `each` using `until`

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

# the `map` is not the territory

    ["apple", "banana", "cherry"].map do |fruit|
      fruit.reverse
    end
    => ["elppa", "ananab", "yrrehc"]

# implementing `map` using `each`

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

# Other Awesome Iterators

* `select` (alias `find_all`)
  * returns all items for which the block returns true(ish)
* `reject`
  * returns all items for which the block returns false(ish)
* `collect` (alias `map`)
  * makes a new array out of whatever the block returns
* `detect` (alias `find`)
  * returns a single item, not an array
  * returns the first item which makes the block return true(ish)
* `inject`
  * accumulates (huh?) -- more on this later

Ref. [Using Select Etc.](http://matthewcarriere.com/2008/06/23/using-select-reject-collect-inject-and-detect/>)

# lethal `inject`ion

* `inject` is a really fun iterator, but it's really weird
* it passes a persistent "accumulator" to each iteration
* the return value of the block becomes the next accumulator

# `inject` example

      @@@ruby
      class Array
        def sum
          inject(0) {|t,n| t + n}
        end
      end
      
      [1,2,3].sum #=> 6

* To help understand this, write out a table with the values of t, n, and the return value for each iteration.

