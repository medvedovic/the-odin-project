# in Rspec the word test is substituted 
# for the word specification

# allows the configuration for the specification
require "spec_helper"

require "zombie"

# Zombie - class we want to test
# defines how the zombie behaves
describe Zombie do
	# EXAMPLE (test)
	# "it names Ash" - name of the example
	# examples are defined using wrod "it"
	it "is named Ash" do
		zombie = Zombie.new
		# EXPECTATION
		zombie.name.should == 'Ash'
	end
	it "has no brains" do
		zombie = Zombie.new
		# should - modifier
		# < - matcher
		zombie.brains.should < 1
	end
	it "is higher than five" do
		zombie = Zombie.new
		zombie.height.should be > 5
	end
	it "is hungry" do
		zombie = Zombie.new
		# zombie.hungry?.should == true
		# zombie.hungry?.should be_true
		zombie.should be_hungry
	end
	it "is dead" do
		zombie = Zombie.new
		zombie.alive?.should_not be true
	end
end

