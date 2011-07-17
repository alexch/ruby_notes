<!SLIDE subsection>
# Loops

Ref. WGR Chapter 6, Control-flow techniques

# `loop`

    @@@ ruby
    loop do
      puts "All work and no play makes Jack a dull boy."
    end

To get out, use `break`:

    @@@ ruby
    loop do
      puts "All work and no play makes Jack a dull boy."
      break if rand > 0.9
    end
    
* Note: `loop` needs a `do` keyword
* That's because it's really an *iterator*

# `while`

    @@@ ruby
    while rand < 0.9
      puts "All work and no play makes Jack a dull boy."
    end

    begin
      puts "All work and no play makes Jack a dull boy."
    end while rand < 0.9

# `until`

    @@@ ruby
    until rand > 0.9
      puts "All work and no play makes Jack a dull boy."
    end
    
    begin
      puts "All work and no play makes Jack a dull boy."
    end until rand > 0.9

# single-line versions

    @@@ ruby
    puts "All work etc." while rand < 0.9
    puts "All work etc." until rand > 0.9

# `for`

    @@@ ruby
    fruits = ["apple", "banana", "cherry"]
    for f in fruits
      puts "I love #{f}!"
    end

