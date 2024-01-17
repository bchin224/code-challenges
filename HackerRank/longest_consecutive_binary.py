n = 439

binary = ''

while n > 0:
    if n % 2 == 1:
        binary += '1'
    else:
        binary += '0'
    n = (n // 2)
    
length = len(binary)
current = 0
result = 0

print(binary)

for i in binary:
    if i == '1':
        current += 1

    elif i == '0':
        if current > result:
            result = current
        current = 0
        
    if current >= result:
        result = current

    print('For', i,'Current:', current, 'Result:', result)
print(result)