<!SLIDE subsection>
# Modules

Ref. WGR Chapter 4, Modules and program organization

<!SLIDE>
# Modules as namespaces

```
@@@ ruby
module Speakers
  class Hello
    def say_hello
      puts "hi"
    end
  end
end
```

From outside the module:

```
x = Speakers::Hello.new
x.say_hello
```

# Modules as mixins

```
@@@ ruby
module Greetings
  def greet
    puts "Hello!"
  end
end
```

* Any class (or object) can *include* a Module
  * also known as *mixing in*
  * so Modules are also called Mixins
* Modules provide *behavior* but no *state*
  * more precisely, they affect the extending object's state

# Module usage
    
    @@@ ruby
    class Person
      include Greetings
    end
    
    alice = Person.new
    alice.greet


# Multiple modules

* You can mix in as many modules as you like
* Resembles multiple inheritance, but less confusing

# Modules cannot be instantiated

    Greeter.new #=> undefined method `new' for Greeter:Module

# Modules have no state
## but they can fake it pretty well

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
  * The same file can be `load`ed more than once, last one sticks
* **require** inserts a file's parsed contents
  * `require 'config'`
  * `require`ing the same file more than once has no effect, first one sticks
* **include** mixes in a module into this class' instances
  * `include Config`
* **extend** mixes in a module into `self`, usually to add class methods
  * `extend Config`
* **`<`** inherits a superclass (pronounced "inherits from")
  * `class BetterString < String`

<!SLIDE incremental>
# module lookup gotchas

* If a class defines the same method as a module, then the class wins, even if the module was included later
* If two modules define the same method, then the *last* one to be included wins
* If you include a module twice, then the second inclusion is *ignored*, so it's still further back on the lookup chain

```
@@@ ruby
class Foo
  include A
  include B
  include A  #<< ignored!
end
```

<!SLIDE subsection>
# Using Modules for Organization

* Modules are used as namespaces
* Classes are also modules
        class Class < Module

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
