array = [2,6,7,3,[2,5,3],3,1,7]

def productSum(array):
    result = 0
    for num in array:
        if isinstance(num,int):
            print(num)
            result += num
        elif isinstance(num,list):
            print(num)
            
    
    print(result)

productSum(array)
			
        
######## find the last line ########

# a = 1 #first page
# b = 2 #second page
# c = 5 #final page

# def findLastLine(a,b,c):
#     if a > b or a<= 0 or b<= 0:
#         print('invalid input')
#     else:
#         arr = [0] * c
#         arr[0] = a
#         arr[1] = b

#         for i in range(2,c):
#             arr[i] = arr[i-1] + arr[i-2]

#         print(arr[c-1])

# findLastLine(a,b,c)