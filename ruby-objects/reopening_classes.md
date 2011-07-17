!SLIDE subsection
# Reopening classes

    @@@ ruby
    class Fixnum
      def even?
        self % 2 == 0
      end
    end

    1.even? #=> false

# Reopening classes

* in Ruby, classes can be opened anywhere
* possible to make additions or changes

        @@@ ruby
        class Student
          def last_name
            @last_name
          end
        end
        
        class Student
          def first_name
            @first_name
          end
        end

# Monkey Patching

* Reopening a system or library class is known pejoratively as Monkey Patching
* Very powerful & dangerous technique

> **With great monkey power comes great monkey responsibility.**
>
> &nbsp; - Spider Monkey

