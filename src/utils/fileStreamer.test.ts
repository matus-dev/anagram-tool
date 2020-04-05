import { fileStreamer } from './fileStremer';

describe('file streamer', () => {
  let allWords: Array<string[]> = [];
  function concatWordsArray(wordsArray: string[]) {
    allWords.push(wordsArray);
  }

  it('reads words in a given file line by line and returns array of words of same length', async () => {
    const path = 'task/data/example1.txt';
    const expectedOutput: Array<string[]> = [['abc', 'fun', 'bac', 'fun', 'cba', 'unf'], ['hello']];

    await fileStreamer(path, concatWordsArray);
    expect(allWords).toStrictEqual(expectedOutput);
  });
});
