!SLIDE subsection
# Hash

Ref. WGR Chapter 9, Section 9.3, Hashes

# Hash

* also known as...
  * Map
  * Associative Array
  * Dictionary
  * Name/Value Pair Store
  * Key/Value Pair Store
  
# Hash literal

a Hash can be defined *literally* (inline) with braces e.g.

    @@@ ruby
    states = {"MA" => "Massachusetts",
              "CA" => "California"}

    states["MA"] #=> "Massachusetts"

!SLIDE

    @@@ ruby
    my_hash = {:a_symbol => 3, "a string" => 4}
    my_hash[:a_symbol] #=> 3
    
    my_hash[:foo] = "bar"
    my_hash #=> {:a_symbol => 3, "a string" => 4, :foo => "bar"}
    

# Hash literals

Ruby 1.8 or 1.9:

    {:foo => "bar", :baz => "baf"}

Ruby 1.9 only:

    {foo: "bar", baz: "baf"}

# hash parameters plus hash literals => named parameters

These are all equivalent:

    @@@ruby
    User.new({:name => "Alex", :email => "alex@stinky.com"})
    User.new(:name => "Alex", :email => "alex@stinky.com")
    User.new :name => "Alex", :email => "alex@stinky.com"
    User.new name: "Alex", email: "alex@stinky.com"
    User.new name:"Alex", email:"alex@stinky.com"
    User.new email:"alex@stinky.com", name:"Alex"

# Hash access

    hash[:foo] = "bar"
    hash[:foo] #=> "bar"

# Hash methods

* each, each_pair
* keys, values
* has_key?, has_value?
* merge, merge!
* delete, delete_if

# Hash arguments

braces are optional...

...**if** the hash is the final argument

(except for a default block)

TODO: more on hashes