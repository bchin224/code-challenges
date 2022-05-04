class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        result = nums[0]
        s = 0
        for i in nums:
            if s < 0:
                s = 0
            s += i
            result =max(s,result)
        return result    
    