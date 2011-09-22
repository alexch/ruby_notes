!SLIDE subsection
# Strings

Ref. WGR Chapter 8, Section 8.1, Working with strings

# String literals

* double-quotes `"foo"`
  * allow interpolation, e.g. `"Welcome, #{name}"`
* single-quotes `'foo'`
  * no interpolation
* %Q -- `%Q{don't worry, "man"}`
    * just like double-quote only you don't need a backslash for "
* %q -- `%q{don't #{interpolate}, "man"}`
  * just like single-quote only you don't need a backslash for '
* %Q, %q -- any delimiter will do
  * `%Q|...|`, `%Q{...}`, `%Q(...)`, etc.

# Multiline strings

* newlines do *not* end a string

        "Now is the winter of our discontent
        made glorious summer by this son of York."
        
=>

        "now is the winter of our discontent\nmade glorious summer by this son of York."

# Here Docs

    first_quatrain = <<END
    My mistress' eyes are nothing like the sun;
    Coral is far more red than her lips' red;
    If snow be white, why then her breasts are dun;
    If hairs be wires, black wires grow on her head.
    END
    
# Here docs with indentation

    def second_quatrain
      x = <<-HTML
        <blockquote>
          I have seen roses damask'd, red and white,
          But no such roses see I in her cheeks; 
          And in some perfumes is there more delight
          Than in the breath that from my mistress reeks.
        </blockquote>
      HTML
      x
    end
    
# Here docs don't have to end the expression

    @@@ruby
    x = <<-NUM.to_i * 10
    5
    NUM
    x  # => 50

Weird, huh?

# substrings

    @@@ruby
    s = "Ruby rocks"
    s[5]    #=> "r"
    s[5,3]  #=> "roc"
    s[5,100]  #=> "rocks"
    s[-3]   #=> "c"
    s[2..6] #=> "by ro"

# substring matching

    @@@ruby
    s = "Ruby rocks"
    s[/r../] #=> "roc"
    s[/r../i] #=> "Rub"
    
# substring setting

    @@@ruby
    s = "Ruby rocks"
    s["rock"] = "rule"
    s #=> "Ruby rules"

# adding strings

    s = "xyz" 
    s + "pdq"  #=> "xyzpdq"
    s          #=> "xyz"
    
    s = "xyz"
    s << "pdq" #=> "xyzpdq"
    s          #=> "xyzpdq"

# string interpolation

Takes any ruby expression, calls `to_s` on it, and smooshes it inside a string

    "nothing compares #{1+1} u" #=> "nothing compares 2 u"

Interpolated quotes are *not* escaped

    "foo #{"bar"} baz" #=> "foo bar baz"

# string interpolation - advanced

anything can go in there, including operators and quotes

    "i love #{girlfriend or "nobody"}"

`nil.to_s` is the empty string, which can be convenient

    "i love #{girlfriend.name if girlfriend}"

# string comparison

    "a" < "b"    #=> true
    "a" < "A"    #=> false
    "a" <=> "b"  #=> -1
    
* `Array#sort` uses `<=>`
  * the "flying saucer" operator
* `String#==` compares the characters in each string

# `gsub`

    s.gsub(/xyz/, "pdq")

* performs a regular expression search-and-replace on the string
* `gsub!` modifies the string in place

# `split`

    "apple banana cherry".split
    => ["apple", "banana", "cherry"]
    
* turns a string into an array
* splits on whitespace by default
  * or you can pass in a delimiter
* `join` turns an array into a string
    
# Digression: A Ruby Idiom    

    @@@ ruby
    s.split.map{|w|w.capitalize}.join(' ')
    
* this technique is called *method chaining*
* each operation changes the result of the previous operation
* in this case, it
  * splits a string into words
  * capitalizes each word
  * joins the words back together

# `each` doesn't support chaining; `map` does

    @@@ ruby
    s.split.map{|w|w.capitalize}.join

    capitalized = []
    s.split.each{|w|
      w.capitalize
    }
    capitalized.join

* `each` returns the original collection
* `map` returns a new collection

# delving into map

    @@@ruby
    s                   # "foo_bar"
      .split("_")       # ["foo", "bar"]
      .map {|w|         # "foo", then "bar"
        w.capitalize    # "Foo", then "Foo"
      }                 # ["Foo", "Bar"]
      .join("_")        # "Foo_Bar"
 
 
# more string methods

* `s.upcase`
* `s.downcase`
* `s.capitalize`
* `s.strip`
  * removes whitespace, not clothes, from the ends of the string
* `s.chomp`
  * removes the final character, but only if it's a "\n"
* `s.center(width)`
* `s.delete(substr)`

some of these have `!` versions which modify the string in place

