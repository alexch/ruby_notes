!SLIDE subsection
# Ruby Functions

This section covers defining functions, passing arguments to them, and the difference between parameters and arguments.

Ref: WGR Chapter 2. Objects, methods, and local variables

Ref: WGR Chapter 2, Section 2.4, "A close look at method arguments"

# Expression values

In Ruby, every expression evaluates to some value

    @@@ ruby
    >> 2 + 2
    => 4
    >> (2+2).zero?
    => false
    >> "zero" if (2+2).zero?
    => nil

# Function values

The value of a function is the value of the final statement

(or the value sent to `return` if that comes first)

# Parameters and return values

    @@@ ruby
    def to_fahrenheit(celsius)
      celsius * 9.0 / 5 + 32
    end

* `celsius` is a parameter
* the value of a function is the value of the final statement
  * in this case, the only statement
* the keyword `return` is available, but usually unnecessary

# Arguments vs. Parameters

    @@@ ruby
    def to_fahrenheit(celsius)
      celsius * 9.0 / 5 + 32
    end
    boiling = 100
    to_fahrenheit(boiling)

* Technically speaking, *arguments* are passed and *parameters* are declared
* Note that the variable names don't have to match!
* In this code, `boiling` is an argument and `celsius` is a parameter
  * In practice, the two terms are interchangeable

# Splat arguments

    @@@ ruby
    def greet(greeting, *names)
      names.each do |name|
        puts "#{greeting}, #{name}!"
      end
    end

    >> greet("Hello", "Alice", "Bob", "Charlie")
    Hello, Alice!
    Hello, Bob!
    Hello, Charlie!

# Default values

    @@@ ruby
    def eat(food = "chicken")
      puts "Yum, #{food}!"
    end

    >> eat
    Yum, chicken!

    >> eat "arugula"
    Yum, arugula!

# The default hash parameter

When calling a method, if the final argument is a hash, you can **leave off** the curly braces

    @@@ ruby
    def add_to_x_and_y(amount, vals)
      vals[:x] + vals[:y] + amount
    end
    
    print_value_plus(2, {:x => 1, :y => 2})
    
    # same as...
    print_value_plus 2, :x => 1, :y => 2
    
    # same as...
    print_value_plus 2, x: 1, y: 2
    
    # same as...
    print_value_plus 2, y: 2, x: 1

# the "options hash" pattern

To pass *variable* parameters, or to pass *named* parameters, you can use an *options hash*:

    @@@ruby
    bake("Wheat")
    bake("Rubylicious", :flour => "sour")
    bake("Rubynickel", :milk => "butter")
    
    def bake(name, options = {})
      flour = options[:flour] || "rye"
      milk = options[:milk] || "cream"
      puts "baking a nice #{flour} loaf with #{milk}"
    end

