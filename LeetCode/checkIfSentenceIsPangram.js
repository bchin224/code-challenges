sentence = "uwqohxamknblecdtzpisgvyfjr";

// var checkIfPangram = function (sentence) {
//   const alphabet = new Map();
//   let count = 0;
//   for (letter of sentence) {
//     if (!alphabet.has(letter)) {
//       alphabet.set(letter, 1);
//       count++;
//     }
//   }
//   console.log(count >= 26);
//   return count >= 26;
// };

var checkIfPangram = function (sentence) {
  const alphabet = new Set(); // Use Set for simplicity
  for (const letter of sentence.toLowerCase()) {
    if (letter >= "a" && letter <= "z") {
      // Ensure only letters are processed
      alphabet.add(letter);
    }
  }
  console.log(alphabet.size === 26);
  return alphabet.size === 26; // A pangram must contain all 26 letters
};

checkIfPangram(sentence);
