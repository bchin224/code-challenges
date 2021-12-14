let string = "DUBL1N"

const correct = string => {
    let result = []
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '5') {
        result.push('S')
      } else if (string[i] === '0') {
        result.push('O')
      } else if (string[i] === '1') {
        result.push('I')
      } else {
        result.push(string[i])
      }
    }
    console.log(result.join('').toString())
    return string
  }

  correct(string)