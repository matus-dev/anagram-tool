import { fileStreamer } from './utils/fileStremer';

async function main() {
  console.log('Starting...');
  const path = 'task/data/example1.txt';
  await fileStreamer(path, console.log);
}

main();
