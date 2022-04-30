# s = '07:05:45PM'
# s = '12:05:45AM'
# s = '02:05:45AM'
s = '12:45:54PM'

def timeConversion(s):
    meridiem = s[len(s)-2:]
    if meridiem == 'AM':
        if s[:2] == '12':
            x = s.split(':')
            x[0] = '00'
            print(':'.join(x)[:8])
            return ':'.join(x)[:8]
        else:
            print(s[:8])
            return s[:8]
    else:
        if s[:2] != '12':
            x = s.split(':')
            x[0] = str(int(x[0])+12)
            print(':'.join(x)[:8])
            return ':'.join(x)[:8]
        else:
            print(s[:8])
            return s[:8]

timeConversion(s)