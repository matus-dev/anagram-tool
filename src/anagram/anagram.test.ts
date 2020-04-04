import { anagram } from './anagram';

describe('anagram', () => {
  it('groups words that are anagram into an array', () => {
    const example: string[] = ['abc', 'fun', 'bac', 'cba', 'unf', 'hello'];
    const expectedResult: Array<string[]> = [['abc', 'bac', 'cba'], ['fun', 'unf'], ['hello']];

    const result = anagram(example);
    expect(result).toStrictEqual(expectedResult);
  });

  it('returns empty array when no words are passed', () => {
    const example: string[] = [];
    const expectedResult: Array<string[]> = [];

    const result = anagram(example);
    expect(result).toStrictEqual(expectedResult);
  });
});
