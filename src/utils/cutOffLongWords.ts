export function cutOffLongWords(word: string) {
  if (word.length > 15) {
    return `${word.substring(0, 20)}...`;
  } else {
    return word;
  }
}
