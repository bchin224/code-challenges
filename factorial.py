# factorial
f = 5

def getFactorial(f):
    if f < 2:
        return 1
    else:
        return f * getFactorial(f-1)
    print
print(getFactorial(f))