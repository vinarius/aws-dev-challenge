export function toTitleCase(string: string): string {
  const titleCasedString = string.split(' ').map(str => {
    return `${str[0].toUpperCase()}${str.slice(1)}`
  });

  return titleCasedString.join(' ');
};