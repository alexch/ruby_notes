# Symbols

!SLIDE

!SLIDE incremental


!SLIDE
# String

[todo]

!SLIDE

# String interpolation

    @@@ ruby
    "boyz #{1 + 1} men"
    => "boyz 2 men"

Any Ruby code can go inside the braces

It gets evaluated and stuck inside the string

same as:

    @@@ ruby
    "boyz " + (1 + 1).to_s + " men"


!SLIDE

    @@@ ruby
    >> a = "world"
    >> puts "hello #{a}"
    hello world

    >> a = 2
    >> puts "hello #{a}"
    hello 2

    >> a = nil
    >> puts "hello #{a} there"
    hello  there


!SLIDE subsection
---

# `yield` calls the default block

    @@@ ruby
    def twice
       yield
       yield
    end

    twice do
      puts "hi"
    end

"twice do" kind of almost resembles English a little, right?

---

