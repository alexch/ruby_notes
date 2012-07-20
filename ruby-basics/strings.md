!SLIDE subsection
# Strings

Ref. WGR Chapter 8, Section 8.1, Working with strings

# String literals

* double-quotes allow *interpolation* and *escaping*

        "\t"  #=> "\t"
        name = "alice"
        "hello, #{name}" #=> "hello, alice"
    
* single-quotes are more literal-minded

        '\t' #=> "\\t"

# weirdo string literals

* %Q -- `%Q{don't worry, "man"}`
    * just like double-quote only you don't need a backslash for "
* %q -- `%q{don't #{interpolate}, "man"}`
  * just like single-quote only you don't need a backslash for '
* any delimiter will do
  * `%Q{...}`, `%Q(...)`, `%Q|...|`, etc.

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
    
<!--# Here docs don't have to end the expression

    @@@ruby
    x = <<-NUM.to_i * 10
    5
    NUM
    x  # => 50

Weird, huh?
-->

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

plus makes a new string

    s = "dog" 
    s + "cow"  #=> "dogcow"
    s          #=> "dog"

shovel changes the original string
    
    s = "dog"
    s << "cow" #=> "dogcow"
    s          #=> "dogcow"

plus-equal makes a new string but changes the variable

    s = "dog"
    s += "cow" #=> "dogcow"
    s          #=> "dogcow"


# string interpolation

Takes any ruby expression, calls `to_s` on it, and smooshes it inside a string

    "nothing compares #{1+1} u" #=> "nothing compares 2 u"

anything can go in there, including operators and quotes

    "i love #{@girlfriend or "nobody"}"

# string comparison

Strings are == if their characters are the same

    "alice" == "alice"  #=> true

Characters are compared in ASCII order (not Unicode or Collation order)

    "a" < "b"    #=> true
    "a" < "Z"    #=> false

The "flying saucer" operator is used for sorting

    "a" <=> "b"  #=> -1
    ["d", "o", "g"].sort #=> ["d", "g", "o"]

# `gsub`

`gsub` munges a string

    s.gsub(/xyz/, "pdq")

* performs a regular expression search-and-replace on the string
* `gsub!` modifies the string in place

# `split`

`split` turns a string into an array

    "apple banana cherry".split
    => ["apple", "banana", "cherry"]
    
* splits on whitespace by default
  * or you can pass in a delimiter

# `join`

`join` turns an array into a string

    ["apple", "banana", "cherry"].join
    => "applebananacherry"

* joins with the empty string by default
  * or you can pass in a delimiter

```
["apple", "banana", "cherry"].join(' ')
=> "apple banana cherry"

```

# Core Mungers Summary

| Method | turns a(n)... | into a(n)... |
|---|---|---|
| split | String | Array  |
| join  | Array  | String |
| gsub  | String | String |
| map   | Array  | Array  |

# more string methods

* `upcase`
* `downcase`
* `capitalize`
  * upcases the first letter and *downcases the rest*
* `reverse`
  * `"stressed".reverse => "desserts"`
* `strip`
  * removes whitespace (not clothes) from the ends of the string
* `chomp`
  * removes the final character, but only if it's a "\n"
* `center(width)`

some of these have `!` versions which modify the string in place
