dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substring(string, dict)
	counter = Hash.new(0)
	arr = string.split(' ')	
	arr.each do |input|
		#"Hello, my dear!".gsub(/\W/, ' ') => "Hello my dear"
		input.gsub!(/\W/, ' ')
		input.downcase!
		dict.each do |word|
			#"hello".include? "lo" => true
			counter[word] += 1 if input.include? word
		end
	end
	counter
end

puts substring("below", dictionary)
puts substring("Howdy partner, sit down! How's it going?", dictionary)