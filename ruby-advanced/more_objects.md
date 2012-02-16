# Sending a message by name

    @@@ ruby
    # equivalent:
    cookie.bake
    cookie.send(:bake)
    method_name = "bake"
    cookie.send(method_name)



# Duping and freezing and cloning

* `dup` makes a copy of the object's data, so you can change it without affecting the original
* `freeze` makes it so when you try to modify an object, it raises an exception instead
* `clone` is like `dup`, but cloning a frozen object freezes the new clone too
  * also `clone` copies the singleton methods

              @@@ruby          
              >> cookie.methods(false)
              => [:bake, :yell]
              >> cookie.clone.methods(false)
              => [:bake, :yell]
              >> cookie.dup.methods(false)
              => []


