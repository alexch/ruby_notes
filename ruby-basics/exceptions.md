!SLIDE subsection
# Exceptions

Ref. WGR Chapter 6, Control-flow techniques, Section 6.4, Error handling and exceptions

# "exception" is a nice way of saying "error"

# Some common exceptions

* `RuntimeError`
* `NoMethodError`
* `IOError`
* `ArgumentError`

> See? They're all errors! :-)

# The Ruby Exception Hierarchy

    Exception
     NoMemoryError
     ScriptError
       LoadError
       NotImplementedError
       SyntaxError
     SignalException
       Interrupt
     StandardError
       ArgumentError
       IOError
         EOFError
       IndexError
       LocalJumpError
       NameError
         NoMethodError
       RangeError
         FloatDomainError
       RegexpError
       RuntimeError
       SecurityError
       SystemCallError
       SystemStackError
       ThreadError
       TypeError
       ZeroDivisionError
     SystemExit
     fatal

# plain `rescue`

    @@@ruby
    begin
      x = 100 / y
    rescue
      x = 0
    end

* if `y` is 0, then it will raise a `ZeroDivisionError`
* but the `rescue` block will save us and make `x` be 0 instead

# type-specific `rescue`

* You can also specify what type of exception you want to rescue
* Also, let's refactor, Ruby style!

        @@@ruby
        x = begin
          100 / y
        rescue ZeroDivisionError
          0
        end
        
* Remember, *every* statement in Ruby returns a value, including `begin`

# i want a `raise`

    @@@ruby 
    def even?(x)
      raise ArgumentError, "I need a number" unless x.is_a? Numeric
      x % 2 == 0
    end
    
# custom exception classes

    @@@ruby
    class Whiz
      class NoJuice < StandardError
      end
      
      def bang
        unless power >= 1.21
          raise NoJuice, 
            "need at least 1.21 jigawatts, but only had #{power}"
        end
      end
    end

# multiple type-specific `rescue`s

    @@@ruby
    def divide_if_even(x, y)
      if even?(x)
        x/y
      end
    rescue ArgumentError
      puts "hey! give me a number next time"
      1
    rescue ZeroDivisionError
      0
    end

# `rescue`ing the exception

    @@@ruby
    x = begin
      100 / y
    rescue ZeroDivisionError => e
      puts "oops! #{e.class}: #{e.message}"
      0
    end

# general `rescue`

    @@@ruby
    begin
      do_something_dangerous
    rescue => e
      puts e.class, e.message
    end

# even more general `rescue`

    @@@ruby
    begin
      do_something_really_dangerous
    rescue Exception => e
      puts e.class, e.message
    end

* the plain `rescue => e` only catches `StandardError` subclasses
* generally you don't want to catch all exceptions
  * `NoMemoryError`s really should stop your program dead unless you know better

# the full `rescue` song and dance

    @@@ruby
    begin
      do_something_dangerous
    rescue SomeError => e
      fix_some_error(e)
    rescue SomeOtherError => e
      fix_some_other_error(e)
    rescue => e
      fix_unknown_standard_error(e)
    else
      something_dangerous_finished
    ensure
      whether_or_not_an_error_was_raised
    end
