export function toTitleCase(string: string): string {
  return string.split(' ').map(str => {
    return `${str[0].toUpperCase()}${str.slice(1)}`
  }).join(' ');
};

export function toSentenceCase(string: string): string {
  const spaceSeparatedWords = string.split(' ');
  const alphaRegex = /[a-z]/i;

  const wordIndex = spaceSeparatedWords.findIndex(word => alphaRegex.test(word));
  if(wordIndex === -1) {
    return spaceSeparatedWords.join(' ');
  }

  const firstWord = spaceSeparatedWords[wordIndex];
  spaceSeparatedWords[wordIndex] = `${firstWord[0].toUpperCase()}${firstWord.slice(1)}`;
  return spaceSeparatedWords.join(' ');
};