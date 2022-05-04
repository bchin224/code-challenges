# s = input('Enter your word: ')
string = 'abaaba'

# reverse = s[::-1]

# if s == reverse:
#     print('Is a palindrome')
# else:
#     print('Not a palindrome')

def isPalindrome(string):
	reverse = ''
	for i in reversed(range(len(string))):
		reverse += string[i]
		
	print(reverse == string)

isPalindrome(string)
