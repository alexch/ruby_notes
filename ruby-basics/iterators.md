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
    potatoes = nil
    3.times do |i|
      potatoes = i+1
      puts "#{potatoes} potato"
    end
    puts potatoes + 1
    
prints

    1 potato
    2 potato
    3 potato
    4

# implementing `times` using `until`

    @@@ruby
    def times x
      i = 0
      until i == x
        yield i
        i += 1
      end
    end

# to `each` his own

    ["apple", "banana", "cherry"].each do |fruit|
      puts "I love #{fruit}!"
    end

# warning: each returns the *collection*, not the *value*

    @@@ruby
    def count_chars a
      c = 0
      a.each do |s|
        c += s.length   # this returns c
      end               # but this returns a
      c                 # so this returns c (again)
    end

    count_chars ["apple", "banana", "cherry"]
    => 17

# implementing `each` using `until`

    @@@ruby
    def each a
      i = 0
      until i == a.size
        yield a[i]
        i += 1
      end
      a
    end

# the `map` is not the territory

    ["apple", "banana", "cherry"].map do |fruit|
      fruit.reverse
    end
    => ["elppa", "ananab", "yrrehc"]

# implementing `map` using `each`

    @@@ruby
    def map input
      a = []
      input.each do |item|
        a << yield(item)
      end
      a
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
          self.inject(0) do |total, current| 
            total + current
          end
        end
      end

      [1,2,3].sum #=> 6

* To help understand this, write out a table with the values of total, current, and the return value for each iteration.

# more help

* Visualizing iterators with colored block diagrams: <http://fablednet.posterous.com/thinking-about-iterators>

