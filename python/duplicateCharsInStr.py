s = 'cheese'

chars = []
count = 0

for i in s:
    if i not in chars:
        chars.append(i)
    else:
        duplicate = i
        count += 1
        print(s.index(i))

print('There are',count,'of',duplicate,)