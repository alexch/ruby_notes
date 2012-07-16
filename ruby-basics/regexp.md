!SLIDE subsection
# Regular Expressions

Regular expressions are terribly powerful, and terribly complicated. They could easily fill a two-day (or longer) class on their own. In this section we will assume you know something about them already, and just cover the basic syntax and point you to some deeper references.

Ref. WGR Chapter 11, Regular expressions and regexp-based string operations

# regexp literals

**slashes** define a regular expression literally (inline)

    @@@ ruby
    foo_matcher = /foo/
    
The above regexp will match a string containing "foo" anywhere inside it

    @@@ ruby
    ooo_matcher = /oo*/

The above regexp will match a string containing "o" or "oo" or "ooo" (and so on) anywhere inside it

# a more complicated regexp

    word_exp = /\b[a-z]*\b/i

* **slashes** delineate the pattern
* **backslash b** means "match a word boundary"
* **brackets** delineate a match of a single character (aka "character class")
* **a hyphen z** means "all the letters between a and z, inclusive"
* **star** means match any number (0 or more) of the previous character (or, as in this case, character class)
* **slash i** at the end means "ignore capitalization" (or "case insensitive")

So the above expression will match any word containing only normal English letters, in any combination of upper- or lowercase.

# regexp operators: equal tilde

**equal tilde** returns the position in the string that matches, or `nil` if no match

    @@@ ruby
    >> "abcde" =~ /bcd/
    => 1
    
Note that the return value is *truthy* if the string is a match, and *falsey* if it's not, which lets you use it inside conditionals:

    @@@ ruby
    if ("abcde" =~ /bcd/)
      puts "yay! it matches!"
    end

# regexp globals

* After a successful match, some *global variables* are set
  * `$~` is what it matched
  * `$1` is the *first substring match*
  * `$2` is the *second substring match*
  * etc.
  * substrings are defined with parentheses in the regexp

```
@@@ruby
if "foobar" =~ /foo(.*)/ then
  puts "The matching string was #{$~}"
  puts "The matching substring was #{$1}"
end
```

Prints this:

```
The matching string was foobar
The matching substring was bar
```

### See Also

  * [$1 and \1 in Ruby](http://stackoverflow.com/questions/288573/1-and-1-in-ruby)
  * [Class Regexp rubydoc](http://ruby-doc.org/core-1.9.3/Regexp.html) section on "Capturing"

# regexp operators: bang tilde
    
**bang tilde** returns `false` if the string matches, or `true` if it doesn't

    @@@ ruby
    >> "abcde" !~ /xyz/
    => true
    >> "abcde" !~ /bcd/
    => false

# some methods that can use regexes

`String.split`
  
`String.[]`

`String.sub` and `String.gsub`

    >> "foobar".sub("foo", "baz")
    => "bazbar"
    >> "foobar".sub(/foo/, "baz")
    => "bazbar"
    >> "foobar".sub(/fo*/, "baz")
    => "bazbar"
    >> "fooooooobar".sub(/fo*/, "baz")
    => "bazbar"
    >> "fooooooobarfoo".sub(/fo*/, "baz")
    => "bazbarfoo"
    >> "fooooooobarfoo".gsub(/fo*/, "baz")
    => "bazbarbaz"
    

`Array.grep`

    >> "foo bar baz".split.grep(/f../)
    => ["foo"]
    >> "foo bar baz".split.grep(/b../)
    => ["bar", "baz"]
    

# MatchData

* If you need more control you can use the `match` method
* It returns a `MatchData` object which is rather complex
* See rubydoc for [Regexp](http://ruby-doc.org/core-1.9.3/Regexp.html) and
[MatchData](http://ruby-doc.org/core-1.9.3/MatchData.html)

# learning more

* <http://rubular.com> is a great interactive Ruby regexp toy
* [the Pickaxe book](http://www.ruby-doc.org/docs/ProgrammingRuby/html/language.html#UJ) has a just-the-facts-maam overview of regexps
* [`cheat regexp`](http://cheat.errtheblog.com/s/regexp) and [`cheat regex`](http://cheat.errtheblog.com/s/regex) have slightly different cheatsheets
  * `gem install cheat` for command-line tool or see <http://cheat.errtheblog.com>
* [http://www.regular-expressions.info/tutorialcnt.html](http://www.regular-expressions.info/) has a good tutorial

