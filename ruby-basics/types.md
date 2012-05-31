!SLIDE subsection
# Types and Conversions

Ref. WGR Chapter 7, Built-in essentials

# Built-in Types

* Numbers
  * `42` (Fixnum)
  * `3.14159` (Float)
* Booleans
  * `true`
  * `false`
* Strings
  * `"apple"`
  * `'banana'`
* Symbols
  * `:apple`

# Built-in Types (cont.)

* Regular Expressions
  * `/fo*/i`
* Arrays
  * `["apple", "banana"]`
* Ranges
  * `(1..10)`
* Hashes
  * `{:apple => 'red', :banana => 'yellow'}`
  * `{apple: 'red', banana: 'yellow'}`

# to_*

* `to_i` converts to integer
* `to_f` converts to float
* `to_s` converts to string
* `to_a` converts to array
* `to_sym` converts to symbol

# to_s

* it's tempting to use `to_s` in your UI
* usually `to_s` is insufficient and therefore useless
* make a custom named method instead for your purposes
  * e.g. `display_name`

# `inspect`

* `inspect` produces a *debug*-ready representation of the object
* usually contains lots of information
* not to be shown to users, but good in log files or console
* a better way to debug: the "d" method
  * <http://github.com/sconover/wrong>
