s = "hooray for food"

var isPalindrome = function(s) {
    let newString = s.toLowerCase().replace(/[^a-z0-9]/gmi, "")
    console.log(newString.split('').reverse().join(''))
    console.log(newString.split('').join(''))
    // console.log(newString.split().reverse().join('') === newString.split().join(''))
};

isPalindrome(s)