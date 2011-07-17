<!SLIDE subsection>
# Arrays

Ref. WGR Chapter 9, Section 9.2, Collection handling with arrays

# Array

* sized dynamically
* can contain mixed types
* zero-indexed
* can be defined *literally* (inline) e.g.

      @@@ ruby
      fruits = ["apple", "banana"]

!SLIDE

    @@@ ruby
    a = [1, 2, 3]
    a.push "four" #=> [1, 2, 3, "four"]
    a.pop         #=> "four"
    a             #=> [1, 2, 3]
    a[0]          #=> 1

# Adding to an array

    @@@ ruby
    a = []
    a << "x"       #=> ["x"]

`<<` is the "shovel" operator

# More ways to add to an array

    @@@ ruby
    a = ["x"]
    a.push "y"     #=> ["x", "y"]
    a + "z"        #=> can't convert String into Array
    a + ["z"]      #=> ["x", "y", "z"] (but a is unchanged)
    a += ["z"]     #=> ["x", "y", "z"]
    a.concat ["w"] #=> ["x", "y", "z", "w"]

* `concat` and `+` make a copy
* `push` and `+=` are destructive
  * Q: Why doesn't push end in a bang?

# Accessing array items

Arrays are zero-indexed

    @@@ ruby
    fruit = ["apple", "banana", "cherry"]
    fruit[0] #=> "apple"
    fruit[2] #=> "cherry"
    fruit[3] #=> nil

Q: which is better -- zero-based indexing or one-based indexing?

# Zero Is Better Than One
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
                
