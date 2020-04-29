import * as _ from 'lodash';

export function anagram(words: string[]): Array<string[]> {
  if (words.length === 0) {
    return [];
  }

  let groupedWords: any = {};

  for (let index = 0; index < words.length; index++) {
    const sortedWord = words[index].split('').sort().join();

    if (groupedWords[sortedWord]) {
      groupedWords[sortedWord].push(words[index]);
    } else {
      groupedWords[sortedWord] = [words[index]];
    }
  }

  return _.map(groupedWords);
}
