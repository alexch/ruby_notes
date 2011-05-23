!SLIDE subsection
# Exceptions

# "exception" is a nice way of saying "error"

# Some common exceptions

* `RuntimeError`
* `NoMethodError`
* `IOError`
* `ArgumentError`

> See? They're all errors! :-)

# `rescue` me

    @@@ruby
    begin
      x = 100 / y
    rescue
      x = 0
    end

* if `y` is 0, then it will raise a `ZeroDivisionError`
* but the `rescue` block will save us and make `x` be 0 instead

# `rescue` you

* You can also specify what type of exception you want to rescue
* Also, let's refactor, Ruby style!

        @@@ruby
        x = begin
          100 / y
        rescue ZeroDivisionError
          0
        end
        
* Remember, *every* statement in Ruby returns a value, including `begin`

# `rescue` her

    @@@ruby
    begin
      do_something_dangerous
    rescue => e
      puts e.class, e.message
    end
    
    => 
    
    NameError
    undefined local variable or method `do_something_dangerous' for main:Object

# `raise`ing the dead

    @@@ruby 
    def even?(x)
      raise ArgumentError, "I need a number" unless x.is_a? Numeric
      x % 2 == 0
    end
    
    
# `raise`ing in the sun

    @@@ruby
    class Whiz
      class NoJuice < Exception
      end
      
      def bang
        unless power >= 1.21
          raise NoJuice, "need at least 1.21 jigawatts"
        end
      end
    end


