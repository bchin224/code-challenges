
stack = []

# add to stack
def addToStack(item):
    stack.append(item)

# delete from stack
def removeFromStack():
    stack.pop()

action = input('What would you like to do? (add/sub)')

if action == 'add':
    item = input('What would you like to add? ')
    addToStack(item)
elif action == 'sub':
    removeFromStack()


print(stack)