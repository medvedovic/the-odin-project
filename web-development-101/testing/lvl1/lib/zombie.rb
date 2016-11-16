class Zombie
	attr_accessor :name, :brains, :height
	def initialize
		@name = 'Ash'
		@brains = 0
		@height = 6
	end
	def hungry?
		true
	end
	def alive?
		false
	end
end