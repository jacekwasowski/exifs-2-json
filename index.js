import exifs2json from './src/exifs2json';

const dir = '/Users/jacekwasowski/OneDrive/Pictures/Jacek';
const output = './exifs.json';

(async () => {
  await exifs2json(dir, output);
})();
