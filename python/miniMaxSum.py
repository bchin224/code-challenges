arr = [1,3,5,7,9]

def miniMaxSum(arr):
    arr.sort()
    min = max = 0
    for num in range(1,4):
        min += arr[num]
        max += arr[num]
    min += arr[0]
    max += arr[4]
        
    print(str(min)+' '+str(max))
    

miniMaxSum(arr)