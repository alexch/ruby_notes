## Chapter 2. Objects, methods, and local variables

<!SLIDE incremental>

# What is an object?

An object encapsulates state and behavior.

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
  * *instance variables* stored in that location

# Defining behavior

    @@@ ruby
    def thing.talk
      puts "I'm a thing."
    end
    
* talk is a *method*
  * aka function, procedure, subroutine

# Sending messages

    @@@ ruby
    thing.talk

prints `I'm a thing.` to the console

  * the object `thing` receives the message `talk` and executes the method `talk`
  * dot (`.`) is the *message operator*

!SLIDE

![method definition](method_definition.png)

(screengrabbed from _The Well-Grounded Rubyist_ PDF)

# Why sending messages?

## Rather than calling functions?

* A function call (in compiled languages) is guaranteed to be made
* A message may or may not be received

!SLIDE

    @@@ruby
    s = 'abc'
    s.upcase          # these are
    s.send('upcase')  # equivalent

    s.send('hello')
    # => NoMethodError: undefined method `hello' for "ABC":String

# The `methods` method

    @@@ ruby
    >> thing.methods
    => [:greet, :eat, :to_fahrenheit, :nil?, ...]
    >> thing.methods(false)
    => [:greet, :eat, :to_fahrenheit]

also useful: `thing.methods.sort`, `thing.methods.grep(/age/)`

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

