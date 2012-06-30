<!SLIDE subsection >
# Class Inheritance

<!SLIDE>
If class B inherits from class A

then instances of B have the behaviors

of both class A and class B

<!SLIDE>
# Inheritance Example

    @@@ ruby
    class Publication
      attr_accessor :publisher
    end
    
    class Magazine < Publication
      attr_accessor :editor
    end

    m = Magazine.new
    m.publisher = "Time Inc."

    m.is_a? Magazine #=> true
    m.is_a? Publication #=> true
    m.class == Publication #=> false
    
<!SLIDE>
* `<` is pronounced "inherits from"
* not to be confused with "extends" which is for modules

<!SLIDE incremental>
# Single vs. Multiple Inheritance
* Ruby has *single inheritance*
  * each class has one and only one parent class
  * [except for BasicObject]
* Ruby can simulate *multiple inheritance* using Modules
  * more later

<!SLIDE>
# A More Realistic Inheritance Example

    @@@ ruby
    class Rectangle
      def initialize(width, height)
        @width, @height = width, height
      end
      def area
        @width * @height
      end
    end
    
    class Square < Rectangle
      def initialize(width)
        super(width, width)
      end
    end

    Square.new(10).area #=> 100

<!SLIDE>

# A Design Note

* inheritance is often more trouble than it's worth
* there are many ways to solve object-oriented design problems
* also try Modules, *delegation*, *configuration*, etc.


