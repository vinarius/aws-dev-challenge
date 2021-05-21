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

  const firstWord = spaceSeparatedWords[firstWordIndex];
  const firstLetter = firstWord[0].toUpperCase();
  const otherLetters = firstWord.slice(1).split('').map(letter => letter.toLowerCase()).join('');
  spaceSeparatedWords[firstWordIndex] = `${firstLetter}${otherLetters}`;
  // TODO: do the rest of the words if words remain
  return spaceSeparatedWords.join(' ');
};