!SLIDE subsection
# RSpec

# describe

# it

# should

* "should" defines an *assertion*
* every test needs at least one assertion
  * or else you're not really testing anything

# be methods

	@@@ ruby
	[].should be_empty

* `be_empty` invokes `empty?` on its target
* `be_valid` invokes `valid?` on its target
* and so on
