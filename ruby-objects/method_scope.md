<!SLIDE subsection>
# Method Scope (Public/Protected/Private)

This section covers public/private/protected method scope

Ref.: WGR Ch. 5, The default object (self), scope, and visibility

# private methods
* declared with `private` keyword
* only accessible to that specific instance
  * i.e. from inside an instance method of that class
  * i.e. when `self` is the receiving object
  
# you can't even access your siblings' private parts

    @@@ ruby
    class Midas
      def initialize(initial_gold)
        @gold = initial_gold
      end
  
      def gold
        @gold
      end

      def take_gold_from(other)
        @gold += other.gold
      end
  
      private :gold
    end

    >> m1 = Midas.new(10)
    >> m2 = Midas.new(20)
    >> m1.take_gold_from(m2)
    NoMethodError: private method `gold' called

# protected methods

* available when `self` is an instance of that class or one of its descendants

        @@@ruby
        class Midas
          protected :gold
        end
    
        m1.take_gold_from(m2)
        => 30

# scoping toggles

* `private`, `protected`, and `public` without arguments turn scoping on or off
* all *upcoming* methods assume that scope, until another scope is set, or the class definition ends
* this is the normal way to mark methods' scope

# weird top-level scope

## (advanced topic)

1. methods defined outside any class or module become *private methods on `Object`* and are available everywhere
2. private methods defined inside the `Kernel` are also available everywhere

`require`, `load`, `raise` etc. are Kernel methods

    @@@ruby
    ruby -e 'print Kernel.private_instance_methods(false)'

