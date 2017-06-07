import exifs2json from './src/exifs2json';

const dir = '/path/to/my/pictures';
const output = './output.json';

(async () => {
  await exifs2json(dir, output);
})();
