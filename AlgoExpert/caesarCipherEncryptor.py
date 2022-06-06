# string = 'abc'
# key = 52
string = 'xzy'
key = 2

def caesarCipherEncryptor(string, key):
    alphabet_keys = {}
    alphabet_idx = {}
    for i in range(26):
        alphabet_keys.update({chr(i+97): i})
        alphabet_idx.update({i:chr(i+97)})
    # print(alphabet_keys)
    print(alphabet_idx)

    result_keys = []
    for letter in string:
            result_keys.append(alphabet_keys[letter])

    # print(result_keys)
    result = ''
    for idx in result_keys:
        if idx + key <= 25:
            result += alphabet_idx[idx+key]
        else:
            index = idx+key-26
            while index > 25:
                index = index - 26
            result += alphabet_idx[index]

    print(result)


caesarCipherEncryptor(string, key)