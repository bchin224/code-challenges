arr = []

largestSum = -1000
currentSum = 0

for _ in range(6):
    arr.append(list(map(int, input().rstrip().split())))

for i in range(4):
    for j in range(4):
        currentSum += arr[i][j] + arr[i][j+1] + arr[i][j+2]
        currentSum += arr[i+1][j+1]
        currentSum += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
        if currentSum > largestSum:
            largestSum = currentSum
        currentSum = 0
            
print(largestSum)