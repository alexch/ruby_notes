<!SLIDE subsection>
# Ruby Objects

This section introduces Ruby's object-oriented programming model, including instances, methods, parameters, and memory management (instances and references). Later sections cover *classes* and *modules* and further topics.

Ref: WGR Chapter 2. Objects, methods, and local variables

Note: Following WGR's lead, in this section we define methods on instances (not on classes), to keep the lessons simple.

<!SLIDE incremental>
# What is an object?

* An object encapsulates state and behavior.

* *encapsulate* - put like things together; keep unlike things apart

* *state* - data, variables, properties, attributes, constants

* *behavior* - methods

# Objects vs. classes

* objects are more fundamental than classes
* in Ruby, you can add behavior to an object directly
* class inheritance is complicated; we'll cover that later

# Creating an object

    @@@ ruby
    thing = Object.new

* now `thing` refers to an object *instance*
  * unique storage location in memory
  * *instance data* stored in that location

# Creating an object *literally*

    @@@ ruby
    fruit = "apple"

* `"apple"` is a *string literal*
* `fruit` now refers to a new object *instance*

# References and Instances

* Imagine computer memory with two compartments: *references* and *instances*
  * also known as "the stack" and "the heap"
* References include *parameters* and *local variables*
* Instances contain the "real" data
* Each reference points at the location of an instance
  * every reference is the same size (just 32 bits, or maybe 64 bits)

# Literals create instances

    @@@ ruby
    fruit = "apple"
    dessert = "apple"

* `fruit` refers to a new object *instance*
* `dessert` refers to a *different*, new object instance

# References are independent of instances

    @@@ ruby
    fruit = "apple"
    dessert = fruit
    fruit = "banana"
    dessert = fruit

What are the values of `fruit` and `dessert` after each line?

# Object ID

How can you tell if two references point to the same instance?

    @@@ ruby
    fruit = "apple"
    dessert = "apple"
    >> fruit.object_id
    => 2165091560
    >> dessert.object_id
    => 2165084200

Ref. WGR Ch.2, Section 2.3.1

# Garbage Collection

    @@@ ruby
    fruit = "apple"
    fruit = "banana"

* Now the instance containing "apple" is *unreferenced*
* So it can (and eventually will) be *garbage collected*

# Side effects

* a variable is a *reference* to an *instance* (persistent location in memory)
* if you have several references to the same instance, odd things can happen

        @@@ ruby
        friend = "Alice"
        teacher = friend
        friend.upcase!
        teacher
        => "ALICE"

!SLIDE subsection
# Behavior

# Defining methods

    @@@ ruby
    cookie = Object.new

    def cookie.bake
      puts "the oven is nice and warm"
    end

* bake is a *method*
  * aka function, procedure, subroutine
* `def cookie.` ("def cookie dot") means "define a method *on* cookie"

# Invoking methods

Behavior comes from *messages* and *methods*.

    @@@ ruby
    cookie.bake

prints `I'm a cookie` to the console

* the object `cookie` receives the message `bake` and executes the method `bake`
* dot (`.`) is the *message operator*

!SLIDE
# Method Definition Schematic
![method definition](method_definition.png)

Ref. _The Well-Grounded Rubyist_ PDF, Fig. 2.1

# The `methods` method

    @@@ ruby
    >> cookie.methods
    => [:nil?, :===, :=~, :!~, :eql?, ...]
    >> cookie.methods(false)
    => [:bake]

also useful: `cookie.methods.sort`, `cookie.methods.grep(/age/)`

    >> cookie = Object.new
    => #<Object:0x007f86e485c3a8>
    >> cookie.methods(false)
    => []
    >> def cookie.bake; puts "hi"; end
    => nil
    >> cookie.methods(false)
    => [:bake]

    >> "goo".methods.grep(/sub/)
    => [:sub, :gsub, :sub!, :gsub!]

# The `respond_to?` method

    @@@ ruby
    if cookie.respond_to? :bake
      cookie.bake
    else
      puts "cookie is unbakable"
    end

# Sending a message by name

    @@@ ruby
    # equivalent:
    cookie.bake
    cookie.send(:bake)
    method_name = "bake"
    cookie.send(method_name)

!SLIDE subsection
# State

# Instance variables are stored in the object

    def cookie.chips=(num_chips)
      @chips = num_chips
    end

    def cookie.yummy?
      @chips > 100
    end

    cookie.chips = 500
    cookie.yummy?   #=> true


# Duping and freezing and cloning

* `dup` makes a copy of the object's data, so you can change it without affecting the original
* `freeze` makes it so when you try to modify an object, it raises an exception instead
* `clone` is like `dup`, but cloning a frozen object freezes the new clone too
  * also `clone` copies the singleton methods

          >> cookie.methods(false)
          => [:bake, :yell]
          >> cookie.clone.methods(false)
          => [:bake, :yell]
          >> cookie.dup.methods(false)
          => []


