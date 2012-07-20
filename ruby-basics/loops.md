<!SLIDE subsection>
# Loops

Ref. WGR Chapter 6, Control-flow techniques

Most people don't use loops, they use *iterators*, so you can just skim this part.

# `while`

    @@@ ruby
    while rand < 0.9
      puts "All work and no play makes Jack a dull boy."
    end

    begin
      puts "All work and no play makes Jack a dull boy."
    end while rand < 0.9

# `until`

`until` is the opposite of `while`

    @@@ ruby
    until rand > 0.9
      puts "All work and no play makes Jack a dull boy."
    end
    
    begin
      puts "All work and no play makes Jack a dull boy."
    end until rand > 0.9

# `while` and `until` both have one-line versions

    @@@ ruby
    puts "For he's a jolly good fellow!" while rand < 0.9
    puts "For he's a jolly good fellow!" until rand > 0.9

# `for in`

    @@@ ruby
    fruits = ["apple", "banana", "cherry"]
    for fruit in fruits
      puts "I love #{fruit}!"
    end

...but don't use `for in`! Instead use `each`:

    @@@ ruby
    fruits = ["apple", "banana", "cherry"]
    fruits.each do |fruit|
      puts "I love #{fruit}!"
    end



