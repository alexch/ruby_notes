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
    def twice_with word
      yield word
      yield word.upcase
    end

    def flatter person
      message = "you are great"
      twice_with(person) do |name|
        puts "#{message}, #{name}!"
      end
    end
    
    flatter "Alex"

* `person` is a parameter of `flatter`
* `message` is a local variable of `flatter`
* `name` is a parameter of the *block*
* `word` is a parameter of `twice_with`

Q: Which variables are available inside the block?

# Nested Scopes

* Every function call creates a new *parent scope*
* A block inside that function creates a *child scope*
* Variable lookup proceeds up the scope chain

# With Great Power Comes Great Responsibility

* Closures drag data along with them
  * Sometimes they drag more than you intended
* Possible dangers:
  * memory leaks
  * side effects
  * namespace collision
  
