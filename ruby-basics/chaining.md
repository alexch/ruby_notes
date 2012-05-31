# Chaining: A Ruby Idiom

    @@@ ruby
    s.split.map{|w|w.capitalize}.join(' ')
    
* this technique is called *method chaining*
* each operation changes the result of the previous operation
* in this case, it
  * splits a string into words
  * capitalizes each word
  * joins the words back together

# Gotcha: `each` doesn't chain

* `each` returns the *original* collection
* `map` returns a new collection

### Solution A: use `map` and chaining

    @@@ ruby
    s.split.map{|w|w.capitalize}.join(' ')

### Solution B: use `each` and an accumulator

    @@@ruby
    capitalized = []
    s.split.each{|w|
      capitalized << w.capitalize
    }
    capitalized.join(' ')

# delving into map

    @@@ruby
    s                   # "foo_bar"
      .split("_")       # ["foo", "bar"]
      .map {|w|         # "foo", then "bar"
        w.capitalize    # "Foo", then "Bar"
      }                 # ["Foo", "Bar"]
      .join(" ")        # "Foo Bar"
