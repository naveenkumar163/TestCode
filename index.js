function findLongestWord(str){
  const words = str.split(' ');

  let maxLength = 0;
  let maxVowels = 0;
  let longestWord = '';

  for(const word of words) {
    const wordLength = word.length;
    const vowelCount = (word.match(/[aeiouAEIOU]/g) || []).length;

    if(wordLength > maxLength || (wordLength == maxLength && vowelCount > maxVowels)) {
      maxLength = wordLength;
      maxVowels = vowelCount;
      longestWord = word;
    }
  }
  return {longestWord, maxLength}
}

const inputData = "Smart people learn from everything and everyone, average people from their experience , stupid people already, have all the answers"
const result = findLongestWord(inputData);
console.log(result.longestWord);