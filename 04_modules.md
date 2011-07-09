<!SLIDE subsection>
# Modules

Ref. WGR Chapter 4, Modules and program organization

<!SLIDE>
# Modules and Mixins

* Any class (or object) can *include* a Module
  * also known as *mixing in*
  * so Modules are also called Mixins
* Modules provide *behavior* but no *state*
  * more precisely, they affect the extending object's state
  
# Multiple modules

* You can mix in as many modules as you like
* Resembles multiple inheritance, but less confusing

# Module definition

    @@@ ruby
    module Greeter
      def greet
        puts "Hello!"
      end
    end
    
# Module usage
    
    @@@ ruby
    class Person
      include Greeter
    end
    
    alice = Person.new
    alice.greet
    
# Modules cannot be instantiated

    Greeter.new #=> undefined method `new' for Greeter:Module

# Modules have no state, but they can fake it pretty well

    @@@ ruby
    module Stacky
      def stack
        @stack ||= []
      end
      def push obj
        stack.push obj
      end
      def pop
        stack.pop
      end
    end

`@stack` will become an instance variable on the includer

<!SLIDE incremental>
# `load` vs. `require` vs. `include` vs. `extend`

* They all sound so similar!
* **load** inserts a file's contents
  * `load 'config.rb'`
* **require** inserts a file's parsed contents
  * `require 'config'`
* **include** mixes in a module into this class' instances
  * `include Config`
* **extend** mixes in a module into `self`, usually to add class methods
  * `extend Config`

<!SLIDE subsection>
# Method Dispatch

# Method Lookup Order
If an object receives a message, then Ruby looks for a receiver of the same name, in this order:

1. its singleton class
2. its class
3. its modules, in reverse order of inclusion
4. its superclass
5. its superclass' modules

... and so on

This chain ends with `Object`, which mixes in `Kernel`, and finally `BasicObject` (which has no mixins)

# ancestors

Check out the `ancestors` class method

    >> String.ancestors
    => [String, Comparable, Object, Kernel, BasicObject]

Schematically:

    @@@ ruby
    class BasicObject
    end
    class Object
      include Kernel
    end
    class String
      include Comparable
    end

<!SLIDE incremental>
# module lookup gotchas

* If a class defines the same method as a module, then the class wins, even if the module was included later
* If two modules define the same method, then the *last* one to be included wins
* If you include a module twice, then the second inclusion is *ignored*, so it's still further back on the lookup chain

        @@@ ruby
        class Foo
          include A
          include B
          include A  #<< ignored!
        end

# Faster than a speeding bullet
# More powerful than a locomotive
# Able to leap tall buildings with a single bound
# Look! Up in the sky!
# It's a bird!
# It's a plane!
# It's...

<!SLIDE incremental>
# super
* `super` jumps up and calls the next method with the same name as this one

# 
* `super` with some arguments passes those arguments
* `super` with no arguments passes the same arguments that were originally passed to this method
* `super()` with an empty argument list calls the parent method with *no* arguments
  * needed to resolve the ambiguity of the bareword `super` call

# `method_missing`

If method dispatch fails, then it starts all over again!

Only this time it's looking for a method named `method_missing`

Useful for "builder pattern" objects

# `method_missing` + `super`

From inside `method_missing`, `super` looks up the chain for another `method_missing` method

Allows chaining/overriding of `method_missing` calls, or fallback to `NoMethodError`

<!SLIDE subsection>
# Using Modules for Organization

* Modules are used as namespaces
* Classes are also modules
  * `class Class < Module`

# Module Organization Example

## `whiz.rb`:

    @@@ ruby
    module Whiz
      VERSION = "1.0.2"
      class GeeGaw
        # ...
      end
    end

## `whiz/bang.rb`:

    @@@ ruby
    module Whiz
      class Bang
        def geegaw
          # inside the module, its members are in scope
          @geegaw ||= GeeGaw.new
        end
      end
    end

## `client.rb`:

    @@@ ruby
    require "whiz"
    require "whiz/bang"

    # outside the module, its members are not in scope
    # you need to name it explicitly
    puts Whiz::VERSION
    bang = Whiz::Bang.new
