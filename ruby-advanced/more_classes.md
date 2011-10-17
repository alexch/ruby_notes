[The Ruby Object Model](http://www.youtube.com/watch?v=UyAoUX6GYI8), in dance

<http://stackoverflow.com/questions/7072269/should-i-use-class-variables-or-class-instance-variables-for-class-static-variabl/7079235#7079235>

There are at least four idioms for switching over and defining methods on the singleton class of the class object Foo:

    class Foo
      @a, @b, @c, @d = 1, 2, 3, 4

      # 1. pass the target to def
      def Foo.a
        @a
      end

      # 2. pass the target to def, relying on the fact that self 
      # happens to be the class object right now
      def self.b
        @b
      end

      # switch from class scope to singleton class scope
      class << self

        # 3. define a plain accessor in singleton class scope
        def c
          @c
        end

        # 4. use a macro to define an accessor
        attr_reader :d
      end

    end

    p [Foo.a, Foo.b, Foo.c, Foo.d]
    #=> [1, 2, 3, 4]

(There are probably half a dozen more ways to do this, once you factor in class_eval and define_method and the like, but that should satisfy you for now. :-))

One final note: class instance variables are only available via the class they're defined on. If you try to call any of those methods from (or via) a subclass, the methods will execute, but the @ variables will all be nil, since self will be the subclass's class object, not the parent class' class object.

    class Bar < Foo
    end

    p [Bar.a, Bar.b, Bar.c, Bar.d]
    #=> [nil, nil, nil, nil]
    
