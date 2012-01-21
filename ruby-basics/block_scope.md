<!SLIDE subsection>
# Block Scope

...or, how closures break encapsulation (in a good way)

# Blocks see the variables of their *definer*, not their *caller*

# Example of Block Scope

    @@@ruby
    def twice
      yield
      yield
    end

    def flatter
      message = "you are great"
      twice do
        puts "#{message}!"
      end
    end

`message` is in the scope of `flatter`, not `twice`

# locals, function parameters, block parameters

    @@@ruby
    def twice s
      yield s
      yield s
    end

    def flatter person
      message = "you are great"
      twice(person) do |name|
        puts "#{message}, #{name}!"
      end
    end
    
    flatter "Alex"

* `person` is a parameter of `flatter`
* `message` is a local variable of `flatter`
* `name` is a parameter of the *block*
* `s` is a parameter of `twice`

Q: Which variables are available inside the block?


