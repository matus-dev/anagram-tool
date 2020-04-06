import { fileReader } from './fileReader';

describe('file streamer', () => {
  let allWords: Array<string[]> = [];
  function concatWordsArray(wordsArray: string[]) {
    allWords.push(wordsArray);
  }

  it('reads words in a given file line by line and returns array of words of the same length', async () => {
    const path = 'task/data/example1.txt';
    const expectedOutput: Array<string[]> = [['abc', 'fun', 'bac', 'fun', 'cba', 'unf'], ['hello']];

    await fileReader(path, concatWordsArray);
    expect(allWords).toStrictEqual(expectedOutput);
  });
});
