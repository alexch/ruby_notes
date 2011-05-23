!SLIDE subsection
# Strings

# String literals

* double-quotes `"foo"`
  * allow interpolation
* single-quotes `'foo'`
  * no interpolation
* %Q `%Q{don't worry, "man"}`
    * just like double-quote only you don't need a backslash for "
* %q `%q{don't #{interpolate}, "man"}`
  * just like single-quote only you don't need a backslash for '
* %q-any delimiter will do-

# Here Docs

    x = <<END
    My mistress' eyes are nothing like the sun;
    Coral is far more red than her lips' red;
    If snow be white, why then her breasts are dun;
    If hairs be wires, black wires grow on her head.
    END
    
# Here docs with indentation

    def foo
      x = <<-HTML
    <blockquote>
      I have seen roses damask'd, red and white,
      But no such roses see I in her cheeks; 
      And in some perfumes is there more delight
      Than in the breath that from my mistress reeks.
    </blockquote>
      HTML
    end
    
# Here docs don't have to end the expression

    x = <<-NUM.to_i * 10
    5
    NUM
    puts x
     
Weird, huh?

# substrings

    @@@ruby
    s = "Ruby rocks"
    s[5]    #=> "r"
    s[5,8]  #=> "rocks"
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

`nil.to_s` is the empty string, which can be convenient

    "i love #{girlfriend.name if girlfriend}"

# string comparison

    "a" <=> "b"  #=> -1
    "a" < "b"    #=> true
    "a" < "A"    #=> false
    
* `Array#sort` uses `<=>`
* `String#==` compares the characters in each string

# `gsub`

    s.gsub(/xyz/, "pdq")

* performs a regular expression search-and-replace on the string
* `gsub!` modifies the string in place

# more string methods

* `s.upcase`
* `s.downcase`
* `s.capitalize`
* `s.strip`
* `s.center(width)`
* `s.chomp`
* `s.delete(substr)`

some of these have `!` versions which modify the string in place

