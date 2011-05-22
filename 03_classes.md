<!SLIDE subsection>
# Classes and Instances

<!SLIDE incremental>
# The Cookie Metaphor

* a class is a cookie cutter
* an instance is a cookie
* memory is cookie dough
* state is frosting
* users are hungry!

<!SLIDE >
# Constructor? I just met 'er!

* To *instantiate* an object, call the *new* method on its class
* *new* does some stuff then turns around and calls *initialize* on the new instance

        @@@ ruby
        class Thing
          def initialize
          end
        end

        thing = Thing.new  # *not* Thing.initialize!

# Instance methods

* defined inside the class
* instance methods are shared among all instances
* same behavior, but different data

# A Nice Object

    @@@ruby
    class Student
      def initialize first_name, last_name
        @first_name = first_name
        @last_name = last_name
      end
  
      def name
        "#{@first_name} #{@last_name}"
      end
    end

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

<!SLIDE incremental>
# Monkey Patching

* Reopening a system or library class is known pejoratively as Monkey Patching
* Very powerful technique
* With great monkey power comes great monkey responsibility



