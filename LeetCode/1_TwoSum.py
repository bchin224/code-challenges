def twoSum(self, nums: List[int], target: int) -> List[int]:
    numsMap = {}
    
    for i, n in enumerate(nums):
        difference = target - n
        
        if difference in numsMap:
            return [nums.index(difference), i]
        numsMap[n] = i
            