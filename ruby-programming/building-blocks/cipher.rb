def caesar_cipher(text, val=1)
	arr = text.split("")
	arr.collect! do |ch|
		i = ch.ord
		if (i >= 65 && i <= 90)
			i += val
			if(i > 90)
				i -= 26
			end
		elsif (i >= 97 && i <= 122)
			i += val	
			if(i > 122)
				i -= 26
			end
		end
	 	ch = i.chr
	end
	return arr.join("")
end

print caesar_cipher("What a string!\n",5)
print caesar_cipher("Bmfy f xywnsl!", -5)
=begin
"a" => 97
"z" => 122	
"A" => 65
"Z" => 90	
=end