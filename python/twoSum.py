def twoNumberSum(array, targetSum):
    result = []
    for i in array:
        pointer = targetSum - i
		if pointer in array and array.index(pointer) != array.index(i):
			result.append(i)
			result.append(pointer)
			return result
    return result
