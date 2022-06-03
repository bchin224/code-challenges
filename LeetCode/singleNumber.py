nums = [4,1,2,1,2]

def singleNumber(nums):
    res = 0
    for i in nums:
        res = i ^ res

    print(res)
    return res


singleNumber(nums)