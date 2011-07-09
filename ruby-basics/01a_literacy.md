
!SLIDE subsection
# Basic Ruby Literacy

This section covers foundational aspects of the Ruby language syntax. It's not important to fully understand all these structures, but you should at least be able to identify them when you see them later. Again, later sections will cover all these topics in much more detail.

Ref: WGR Chapter 1. Bootstrapping your Ruby literacy

# Ruby syntax cheatsheet

[TODO: merge pngs]

![cheatsheet](cheatsheet/cheatsheet1.png)
![cheatsheet](cheatsheet/cheatsheet2.png)
![cheatsheet](cheatsheet/cheatsheet3.png)

(screengrabbed from _The Well-Grounded Rubyist_ PDF)

# Ruby identifiers

* `local_variable` - start with letter or underscore, contain letters, numbers, underscored
* `@instance_variable` - start with `@`
* `@@class_variable` - start with `@@`
* `$global_variable` - start with `$`
* `Constant` - start with uppercase letter
* `method_name?` - same as local, but can end with `?` or `!` or `=`
* keywords - about 40 reserved words (`def`) and weirdos (`__FILE__`)
* literals - `"hi"` for strings, `[1,2]` for arrays, `{:a=>1, :b=2}` for hashes

# Built-in Types (and their literals)

* Numbers
  * `42`
* Booleans
  * `true`
  * `false`
* Strings
  * `"apple"`
  * `'banana'`
* Symbols
  * `:apple`
* Arrays
  * `["apple", "banana"]`
* Hashes
  * `{:apple => 'red', :banana => 'yellow'}`
* Ranges
  * `(1..10)`

# Variable Scopes

    @@@ ruby
    var   # local variable (or method call)
    @var  # instance variable
    @@var # class variable
    $var  # global variable
    VAR   # constant

# Messages and Methods

* an object is referenced by a variable or a literal
* the dot operator (`.`) sends a message to an object
* an object receives a *message* and invokes a *method*
* with no dot, the default object (`self`) is the receiver

# Classes

* A class defines a group of behaviors (methods)
* Every object has a class, `Object` if nothing else

# `load` and `require`

* `load` inserts a file's contents into the current file
* `require` makes a *feature* available to the current file
  * skips already-loaded files
  * omits the trailing `.rb`
  * can also be used for extensions written in C (`.so`, `.dll`, etc.)

