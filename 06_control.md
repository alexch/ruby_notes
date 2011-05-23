<!SLIDE subsection>
# Control Flow

# `if`

    if condition
      statement
    end
    
    if condition then statement end

    if condition; statement; end

    statement if condition

# `else`

    if condition
      statement1
    else
      statement2
    end

# `elsif`

    if condition1
      statement1
    elsif condition2
      statement2
    else
      statement3
    end

# `not`

    if x == 2
      puts "two"
    end

    if not x == 2
      puts "not two"
    end
    
# `!`

    if !x == 2
      puts "not what you think!"
    end

Uh-oh! The bang operator binds very tightly, so that actually means

    if (!x) == 2
    
and assuming `x` is a number, `!x` will always be `false`

    if !(x == 2)
      puts "not two"
    end

Moral: use `not` in conditions, or use `unless`

# unless

    puts "bad" unless good?

* `unless` means "if not"
* it can make your code read better
* it can also make your code read worse
* never use with `not`; use sparingly with `else`
  * double negatives are not unconfusing
    
# assignment in conditionals

* `if x = 1` gives a warning, since it will always be true
* `if x = y` gives no warning, since you might mean it
  * it still looks funny
  * it can be useful, e.g.

        @@@ ruby
        if (last_name = name.split.last)
          puts last_name
        end
        
# `case`

    @@@ruby
    case var
    when value1
      puts "var is sorta value1"
    when value2, value3
      puts "var is sorta value2 or maybe value3"
    else
      puts "var is weird"
    end

# threequal

* case comparison uses the `===` operator
  * aka "threequal"
* it's normally the same as `==` but can be overridden
  * e.g. for Class, it means `is_a?`, so you can do
        @@@ ruby
        case input
        when String
          input.to_i
        when Array
          input.first.to_i
        else
          input
        end
        
<!SLIDE subsection>
# Loops

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

