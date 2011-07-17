!SLIDE subsection
# RSpec Explained

# describe

* defines a *context*
* takes a class or a string as its name

# it

* defines an *example* (aka *spec* or *test*)

# should

* defines an *assertion*
* every test needs at least one assertion
  * or else you're not really testing anything

# matchers

* passed to `should`
* perform a test on the object that `should` is called on

# be matchers

	@@@ ruby
	[].should be_empty

* uses `method_missing` magic
* `be_empty` invokes `empty?` on its target
* `be_valid` invokes `valid?` on its target
* and so on
