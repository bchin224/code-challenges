currentQueue = []

def appendQueue(item):
    currentQueue.insert(0,item)

def removeQueue():
    currentQueue.pop()

appendQueue(5)
appendQueue(59824735)
appendQueue('cheese')
appendQueue('crabs')

removeQueue()
removeQueue()
print(currentQueue)