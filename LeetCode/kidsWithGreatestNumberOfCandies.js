Input: candies = [2,3,5,1,3], extraCandies = 3

var kidsWithCandies = function(candies, extraCandies) {
    return candies.map((candy) => candy + extraCandies > Math.max(...candies))
};

kidsWithCandies(candies, extraCandies)