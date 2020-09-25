import exifs2json from './src/exifs2json.js';

const dir = '/path/to/my/pictures';
const output = './output.json';

(async () => {
  await exifs2json(dir, output);
})();
