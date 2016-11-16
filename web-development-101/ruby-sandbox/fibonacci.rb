a,b = 1,1
sum = 0

while b < 4000000 do
	b = a + b
	a = b - a
	if b % 2 == 0
		sum = sum + b
	end
end

puts "The sum is: #{sum}"
#=>The sum is: 4613732