s = "A man, a plan, a canal: Panama"

def isPalindrome(s):
    newString = ''

    for c in s:
        if c.isalnum():
            newString += c.lower()

    print(newString == newString[::-1])

isPalindrome(s)