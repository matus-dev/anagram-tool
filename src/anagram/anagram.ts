type WordsArray = {
  key: string;
  words: string[];
}[];

export function anagram(words: string[]): Array<string[]> {
  if (words.length === 0) {
    return [];
  }

  let groupedWords: WordsArray = [
    {
      key: words[0],
      words: [words[0]],
    },
  ];

  for (let index = 1; index < words.length; index++) {
    const word = words[index];
    let wordAddedFlag = false;
    for (let i = 0; i < groupedWords.length; i++) {
      if (word.length === groupedWords[i].key.length && compareTwoWords(word, groupedWords[i].key)) {
        groupedWords[i].words.push(word);
        wordAddedFlag = true;
        break;
      }
    }
    if (!wordAddedFlag) {
      groupedWords.push({
        key: word,
        words: [word],
      });
    }
  }

  return groupedWords.map((group) => group.words);
}

function compareTwoWords(wordOne: string, wordTwo: string): boolean {
  const firstWordArr = wordOne.split('').sort();
  const secondWordArr = wordTwo.split('').sort();

  if (firstWordArr.join() === secondWordArr.join()) {
    return true;
  }
  return false;
}
