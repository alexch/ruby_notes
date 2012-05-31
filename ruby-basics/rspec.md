!SLIDE subsection
# RSpec Explained

# describe

    @@@ruby
    describe Cookie do
    end

* defines a *context*
* takes a class or a string as its name

# it

    @@@ruby
    describe Cookie do
      it "bars" do
      end
    end

* defines an *example* 
  * (aka *spec* or *test*)
* takes a string as its name

# should

    @@@ruby
    describe Cookie do
      it "has the right amount of chips" do
        f = Cookie.new
        f.chips.should == 72
      end
    end

* defines an *assertion*
* every test needs at least one assertion
  * or else you're not really testing anything

# matchers

    @@@ruby
    describe Cookie do
      it "has approximately 70 chips" do
        f = Cookie.new
        f.chips.should be_within(5).of(70)
      end
    end

* weirdo argument to `should`
* performs a test on the object that `should` is called on

# be matchers

    @@@ ruby
    [].should be_empty

* uses `method_missing` magic
* `be_empty` invokes `empty?` on its target
* `be_valid` invokes `valid?` on its target
* and so on

# before and after

    @@@ruby
    describe Counter do
      before do
        @data = [0,1,2,3]
      end
      it "counts data" do
        Counter.new(@data).count.should == 4
      end
      it "adds data too" do
        Counter.new(@data).sum.should == 6
      end
    end

* `before` blocks will be executed before *each* of the specs in that `describe` block
* there's also `before :all do..end` which executes only once
* there's also `after` with similar semantics

