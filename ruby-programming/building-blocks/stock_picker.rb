prices = [17,3,6,9,15,8,6,1,10]
prices2 = [17,15,3,6,9,8,6,10,1]
prices3 = [17,15,3,6,9,8,6,1]

def stock_picker(arr)
	buy_price = 0;
	sell_price = 0;
	diff = 0;
	arr.each do |buy|
		arr.each do |sell|
			if (sell - buy > diff)
				if(arr.index(buy)<arr.index(sell))
					buy_price = buy
					sell_price = sell
					diff = sell - buy
				end
			end
		end
	end
	return [arr.index(buy_price),arr.index(sell_price)]
end

print stock_picker(prices)
print stock_picker(prices2)
print stock_picker(prices3)

# Implement a method #stock_picker that takes in 
# an array of stock prices, one for each hypothetical 
# day. It should return a pair of days representing 
# the best day to buy and the best day to sell. 
# Days start at 0.

# >> stock_picker([17,3,6,9,15,8,6,1,10])
# => [1,4]  # for a profit of $15 - $3 == $12

# Quick Tips:
# You need to buy before you can sell
# Pay attention to edge cases like when the lowest 
# day is the last day or the highest day is the first day.