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
  * returns all items for which the block returns true(ish)
* `reject`
  * returns all items for which the block returns true(ish)
* `collect` (alias `map`)
  * makes a new array out of whatever the block returns
* `detect` (alias `find`)
  * returns a single item, not an array
  * returns the first item which makes the block return true(ish)
* `inject`
  * accumulates (huh?)

Ref. <http://matthewcarriere.com/2008/06/23/using-select-reject-collect-inject-and-detect/>

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


