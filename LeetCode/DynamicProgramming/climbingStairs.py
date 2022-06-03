n = 5

def climbStairs(n):
    first, second = 1, 1
    
    for i in range(n-1):
        temp = first
        first = first + second
        second = temp
    
    print(first)
    

climbStairs(n)