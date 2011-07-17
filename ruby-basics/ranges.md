!SLIDE subsection
# Ranges

Ref. WGR Chapter 9, Collection and container objects, Section 9.4, Ranges

# Creating a range

Two dots: inclusive

    @@@ruby
    up_to_100 = 1..100

Three dots: exclusive

    @@@ruby
    up_to_99 = 1...100
    
# Ranges can turn into arrays

    @@@ruby
    >> (1..10).to_a
    => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Ranges act like virtual arrays

    @@@ruby
    >> (1..10).map{|x| x*2}
    => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# String ranges

    @@@ruby
    >> alphabet = "a".."z"
    => "a".."z"

# Common uses of ranges

* Ranges are primarily used for 
  * looping
  
        @@@ruby
        (1..10).each do |i|
          puts "#{i} mississippi"
        end

  * string or array indexing

        @@@ruby
        >> "my bologna has a first name"[3..10]
        => "bologna "

# Range methods

    @@@ruby
    >> up_to_10 = 1..10
    => 1..10
    >> up_to_10.begin
    => 1
    >> up_to_10.end
    => 10
    >> up_to_10.exclude_end?
    => false
    >> up_to_10.include? 5
    => true
    >> up_to_10.include? 15
    => false

# String ranges have weird semantics (advanced)

    >> alphabet.include? "c"
    => true
    >> alphabet.include? "abc"
    => false
    >> alphabet.cover? "abc"
    => true

`cover?` just checks whether the parameter falls between the endpoints, not whether it is inside the virtual array
