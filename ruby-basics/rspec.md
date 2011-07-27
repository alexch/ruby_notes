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

# before and after

    @@@ruby
    before do
      @data = [1,2,3]
    end

* defines some code that will be executed before *each* of the specs in that `describe` block
* there's also `before :all do..end` which executes only once
* there's also `after` with similar semantics

