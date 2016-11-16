nums1 = [4,3,78,2,0,2]
nums2 = [1,2,3,4,5]
nums3 = [9,6,5,3,2]

#loop through array total of length - 1 times
#after n iteration, don't check n right-most element(s)

def bubble_sort(arr)
	unless sorted?(arr)
		n = arr.length - 1
		n.times do |counter|
			pass_through(arr,counter)
		end
	end
	arr
end

def pass_through(arr, count)
	n = arr.length - count
	n.times do |i|
		if !arr[i+1].nil? && arr[i] > arr[i+1]
			arr[i], arr[i+1] = arr[i+1], arr[i]
		end
	end
end

def sorted?(arr)
	arr.each_with_index do |num, i|
		if !arr[i+1].nil? && arr[i] > arr[i+1]
			return false
			break
		else
			return true
		end
	end	
end

a = ["hola","hello","hey","hi"]

def bubble_sort_by(arr)
	n = arr.length - 1
	n.times do |counter|
		k = arr.length - counter - 1
		k.times do |i|
			if yield(arr[i],arr[i+1]) > 0
				arr[i], arr[i+1] = arr[i+1], arr[i]
			end			
		end
	end
	p arr
end

p bubble_sort(nums1)
p bubble_sort(nums2)
p bubble_sort(nums3)

bubble_sort_by(a) do |left, right|
	left.length - right.length
end