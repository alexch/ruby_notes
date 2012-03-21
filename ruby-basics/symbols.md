!SLIDE subsection
# Symbols

Ref. WGR Chapter 8, Section 8.2, Symbols and their uses

# :a_symbol

There is only one representation of a given symbol in memory, so it really means "the thing named :a_symbol" to the ruby interpreter.

Hardcore Rubyists prefer symbols over hardcoded globals or strings. They're very lightweight.

They also look better in code and are easier to type (by one character).

# In Alex's Humble Opinion

* Symbols are silly
  * or, symbols are a good experiment with a negative result
* Symbols' main function is to confuse people about hash keys
  * the existence of `HashWithIndifferentAccess` is an argument against the existence of symbols
  * if you use JSON or Rails, you must code defensively
* Proposal:
  * keep the symbol syntax
  * symbols become immutable strings
  * `:foo == "foo".freeze`
