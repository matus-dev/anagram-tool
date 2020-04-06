#!/usr/bin/env ts-node
import { program } from 'commander';
import { fileReader } from './utils/fileReader';
import { anagram } from './anagram/anagram';

function printAnagrams(wordsArray: string[]) {
  const allAnagrams = anagram(wordsArray);
  allAnagrams.forEach((anagramArray) => {
    console.log(anagramArray.join());
  });
}

program.version('0.0.1');

program
  .command('get-anagrams <filePath>')
  .description('get anagrams tool')
  .action(async (filePath) => {
    await fileReader(filePath, printAnagrams);
  });

// error on unknown commands
program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
  process.exit(1);
});

program.parse(process.argv);
