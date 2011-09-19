!SLIDE subsection
# The Closure Zoo

* blocks
* procs
* lambdas
* methods
* bears

# They vary based on how they deal with

* arity
  * do they care how many parameters they're passed?
* return semantics
  * does `return` return from the **closure** or from the **function**?
* scope
  * does it inherit scope or define a new one?

# Rule #1: ignore lambdas

* move along; nothing to see here
* if you need to declare a closure, use `proc`
* procs are easier to use
  * due to their answers to the *arity* and *return* questions

# Rule #2: blocks are procs

* or at least they act like they are
* there are some minor performance differences in some Ruby VMs

# Rule #3: `def` breaks scope; `do` doesn't

    @@@ruby
    x = 7

    proc { puts x }.call #=> 7

    def foo
      puts x
    end
    foo #=> NameError: undefined local variable or method `x'

# Rule #4: don't worry about it

* just muddle along and things will probably work ok


