!SLIDE subsection
# Regular Expressions

Regular expressions are terribly powerful, and terribly complicated. They could easily fill a two-day (or longer) class on their own. In this section we will assume you know something about them already, and just cover the basic syntax and point you to some deeper references.

Ref. WGR Chapter 11, Regular expressions and regexp-based string operations

# regex literals

    @@@ ruby
    word_exp = /\b[a-z]*\b/i
  
* **slashes** delineate the pattern
* **backslash b** means "match a word boundary"
* **brackets** delineate a match of a single character (aka "character class")
* **a hyphen z** means "all the letters between a and z, inclusive"
* **star** means match any number (0 or more) of the previous character (or, as in this case, character class)
* **slash i** at the end means "ignore capitalization" (or "case insensitive")

So the above expression will match any word containing only normal English letters, in any combination of upper- or lowercase.

# regex operators

**equal tilde** returns the position in the string that matches, or `nil` if no match

    @@@ ruby
    >> "abcde" =~ /bcd/
    => 1
    
**bang tilde** returns `false` if the string matches, or `true` if it doesn't

    @@@ ruby
    >> "abcde" !~ /xyz/
    => true
    >> "abcde" !~ /bcd/
    => false

# operations that use regexes

String#split
  
Array#grep

String#gsub


# learning more

* <http://rubular.com> is a great interactive Ruby regexp toy
* [the Pickaxe book](http://www.ruby-doc.org/docs/ProgrammingRuby/html/language.html#UJ) has a just-the-facts-maam overview of regexps
* [`cheat regexp`](http://cheat.errtheblog.com/s/regexp) and [`cheat regex`](http://cheat.errtheblog.com/s/regex) have slightly different cheatsheets
  * `gem install cheat` for command-line tool or see <http://cheat.errtheblog.com>
* [http://www.regular-expressions.info/tutorialcnt.html](http://www.regular-expressions.info/) has a good tutorial

