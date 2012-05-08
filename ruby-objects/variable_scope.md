<!SLIDE subsection>
# Ruby Scope

This section covers globals, constants, and class variables.

Ref.: WGR Ch. 5, The default object (self), scope, and visibility
    
<!SLIDE subsection>
# Global and Class Variable Scope

# Constants

* start with a capital letter
* might be scoped inside modules e.g. Math::PI
* once set, cannot be changed
* turns out that all classes and modules are actually constants

# Global Variables

* start with `$`
* available everywhere
* Danger!

# Built-in Global Variables

* `$:` load path (also `$LOAD_PATH`)
* `$*` command-line args (also `ARGV`)
* `$$` pid
* `$!` the most recent shell error
* for more, open English.rb in the Ruby source
  * `$HOME/.rvm/src/ruby-1.9.2-*/lib/English.rb`

# Class Variables

* start with `@@`
* really "class *and* instance *and* descendants" variables
* available inside class definitions **and** instance methods
* used for counters, caches, etc.

# Class Variable Problems

* must be initialized before access (unlike instance vars)
* very widely shared, so easily polluted
* can be replaced with *class instance variables*
  * single-`@` vars inside class methods

# Class Instance Variables

* start with `@`
* accessible only inside *class scope*
  * e.g. inside a class method
* clearer and more consistent semantics than `@@` class variables

