import * as lineReader from 'line-reader';
import * as fs from 'fs';

export async function fileReader(path: string, callBack: any): Promise<any> {
  if (!fs.existsSync(path)) {
    throw new Error(`No file at location: ${path}`);
  }

  let words: string[] = [];
  let tempLength: number = 0;
  return new Promise((resolve, reject) => {
    lineReader.eachLine(path, function (line, last) {
      if (tempLength === 0) {
        tempLength = line.length;
      }
      // assuming words are sorted by length we only need
      // to check for words longer than the current
      if (line.length > tempLength) {
        callBack(words);
        tempLength = line.length;
        words = [line];
      } else {
        words.push(line);
      }

      if (last) {
        callBack(words);
        resolve();
      }
    });
  });
}
