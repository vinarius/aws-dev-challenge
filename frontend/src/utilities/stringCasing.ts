/**
 * @param string '1 cup brown sugar' 
 * @returns '1 Cup Brown Sugar'
 */
export function toTitleCase(string: string): string {
  return string.split(' ').map(str => {
    const firstLetter = str[0].toUpperCase();
    const otherLetters = str.slice(1).split('').map(letter => letter.toLowerCase()).join('');
    return `${firstLetter}${otherLetters}`
  }).join(' ');
};


/**
 * @param string '1 cup brown sugar' 
 * @returns '1 Cup brown sugar'
 */
export function toSentenceCase(string: string): string {
  const spaceSeparatedWords = string.split(' ');
  const alphaRegex = /[a-z]/i;

  const firstWordIndex = spaceSeparatedWords.findIndex(word => alphaRegex.test(word));
  if(firstWordIndex === -1) {
    return spaceSeparatedWords.join(' ');
  }

  for(let i=firstWordIndex; i<spaceSeparatedWords.length; i++){
    const targetWord = spaceSeparatedWords[i];
    const firstLetter = i === firstWordIndex ? targetWord[0].toUpperCase() : targetWord[0].toLowerCase();
    const otherLetters = targetWord.slice(1).split('').map(letter => letter.toLowerCase()).join('');
    spaceSeparatedWords[i] = `${firstLetter}${otherLetters}`;
  }

  return spaceSeparatedWords.join(' ');
};