candles = [4,4,1,3]

def birthdayCakeCandles(candles):
    candles.sort()
    print(candles.count(candles[-1]))
    
birthdayCakeCandles(candles)
