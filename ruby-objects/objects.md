<!SLIDE subsection>
# Ruby Objects

This section introduces Ruby's object-oriented programming model, including instances, methods, parameters, and memory management (instances and references). Later sections cover *classes* and *modules* and further topics.

Ref: WGR Chapter 2. Objects, methods, and local variables

Note: Following WGR's lead, in this section we define methods on instances (not on classes), to keep the lessons simple.

<!SLIDE incremental>

# What is an object?

An object encapsulates state and behavior.

*encapsulate* - put like things together; keep unlike things apart

*state* - data, variables, properties, attributes, constants

*behavior* - methods

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

---

# Defining behavior

    @@@ ruby
    def thing.talk
      puts "I'm a thing"
    end
    
* talk is a *method*
  * aka function, procedure, subroutine
* `def thing.` ("def thing dot") means "define a method *on* thing"

# Invoking behavior

Behavior comes from *messages* and *methods*.

    @@@ ruby
    thing.talk

prints `I'm a thing` to the console

* the object `thing` receives the message `talk` and executes the method `talk`
* dot (`.`) is the *message operator*

# Why sending messages?

## Rather than calling functions?

* A function call (in compiled languages) is guaranteed to be made
* A message may or may not be received

!SLIDE
# Method Definition Schematic
![method definition](method_definition.png)

Ref. _The Well-Grounded Rubyist_ PDF, Fig. 2.1

# The `methods` method

    @@@ ruby
    >> thing.methods
    => [:greet, :eat, :to_fahrenheit, :nil?, ...]
    >> thing.methods(false)
    => [:greet, :eat, :to_fahrenheit]

also useful: `thing.methods.sort`, `thing.methods.grep(/age/)`

# The `respond_to?` method

    @@@ ruby
    if thing.respond_to? :talk
      thing.talk
    else
      puts "thing is mute"
    end

# Sending a message by name

    @@@ ruby
    >> thing.age
    => 16
    >> thing.send(:age)
    => 16
    >> property = "age"
    => "age"
    >> thing.send(property)
    => 16

# References and side effects

* a variable is a *reference* to an *instance* (persistent location in memory)
* if you have several references to the same instance, odd things can happen

        @@@ ruby
        friend = "Alice"
        teacher = friend
        friend.upcase!
        teacher
        => "ALICE"

# Duping and freezing and cloning

* `dup` makes a copy of the object's data, so you can change it without affecting the original
* `freeze` makes it so when you try to modify an object, it raises an exception instead
* `clone` is like `dup`, but cloning a frozen object freezes the new clone too
  * also it copies the singleton methods
  
          >> thing.methods(false)
          => [:talk, :yell]
          >> thing.clone.methods(false)
          => [:talk, :yell]
          >> thing.dup.methods(false)
          => []


