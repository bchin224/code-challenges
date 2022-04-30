string = 'Bacon, egg and cheese on toast with sriracha'

# using extended slice method
def reverseStr(string):
    print(string[::-1])


# def reverseStr(string):
#     result = ''

#     for i in range(len(string)-1,-1,-1):
#         result += string[i]
#     print(result)


# using extended slice method
# def reverseStr(string):
#     print(string[-1::-1])


# using reverse
# def reverseStr(string):
#     print(''.join(reversed(string)))

reverseStr(string)