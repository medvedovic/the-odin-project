num = 600851475143
factors = []

def is_prime (input)
	bool = true
	(2...input).each do |i|
		bool = false if input % i == 0 
	end
	return bool
end

#while num > 0 do
	(2...num).each do |x|
		if is_prime(x) && num % x == 0 
			factors << x
			num = num / x
		end
	end
#end

puts factors.max