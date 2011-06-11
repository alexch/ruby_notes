!SLIDE subsection
# Collections

* Arrays
* Hashes
* Ranges
* Sets

!SLIDE subsection
# Arrays

# Adding to an array

    @@@ ruby
    a = []

    a << "x"       #=> ["x"]
    a.push "y"     #=> ["x", "y"]
    a + "z"        #=> can't convert String into Array
    a + ["z"]      #=> ["x", "y", "z"]
    a.concat ["w"] #=> ["x", "y", "z", "w"]

* Note: "push" is destructive; "concat" makes a copy
* Why doesn't push end in a bang?

# Accessing array items

Arrays are zero-indexed

    @@@ ruby
    fruit = ["apple", "banana", "cherry"]
    fruit[0] #=> "apple"
    fruit[2] #=> "cherry"
    fruit[3] #=> nil
        
# Zero > One

* Think of the index as pointing to the **space between** items

![array indexing](array_indexing.png)

* This allows consistent length and looping semantics
  * It's always "less than the limit" 
  * and "the limit *is* the size" 
  * i.e. a[0,3] has 3 things in it, indexed 0,1,2


# Fun with Array Indexes

    @@@ ruby
    fruit = ["apple", "banana", "cherry", "date"]

negative indexes count from the back

    @@@ ruby
    a[-1] #=> "date"
        
range indexes

    @@@ ruby
    fruit[1..3]  #=> ["banana", "cherry", "date"]
    fruit[1...3] #=> ["banana", "cherry"]

# Multidimensional arrays (aka matrices)

* No special matrix syntax
* Have to be built up "by hand" as arrays of arrays

        @@@ ruby
        times_table = []
        4.times do |x| 
          times_table[x] = []
          4.times do |y| 
            times_table[x][y] = x * y
          end
        end

        >> times_table
        => [[0, 0, 0, 0], [0, 1, 2, 3], [0, 2, 4, 6], [0, 3, 6, 9]]
        >> times_table[2][3]
        => 6
                

!SLIDE subsection
# Hash

# Array vs. Hash

* An array is an ordered list of values
* A hash is an unordered set of key/value pairs

* An array has an index that must be an integer
* A hash has a key that can be any object (number, string, another hash, etc.)

* Array is also called List, Vector
* Hash is also called Map, Dictionary

# Hash literal

    {:foo => "bar", :baz => "baf"}

# Hash access

    hash[:foo] = "bar"
    hash[:foo] #=> "bar"

# Hash methods

* `each`, `each_pair`
* `keys`, `values`
* `has_key?`, `has_value?`
* `merge`, `merge!`
* `delete`, `delete_if`

# Hash arguments

braces are optional...

...**if** the hash is the final argument

(except for a default block)

!SLIDE subsection
# Ranges

!SLIDE subsection
# Sets


