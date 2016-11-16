module Enumerable
	def my_each
		i = 0
		while i < self.length
			yield(self[i])
			i += 1
		end
		self
	end

	def my_each_with_index
		i = 0
		while i < self.length
			yield(self[i], i)
			i += 1
		end
		self
	end

	def my_select
		arr = []
		if block_given?
			self.my_each  do |x| 
				arr<<x if yield(x)
			end
			arr
		else
			self.to_enum
		end	
	end

	#def my_all?
	#	self.each do |x|
	#		if yield(x)
	#			true
	#		else
	#			false
	#			break
	#		end
	#	end
	#end

	def my_all?
		arr = self.my_select { |x| yield(x) }
		arr.length == self.length
	end

	def my_any?
		arr = self.my_select { |x| yield(x) }
		arr.length > 0
	end

	def my_none?
		arr = self.my_select { |x| yield(x) }
		arr.length == 0
	end

	def my_count
		arr = self.my_each.length
	end
end