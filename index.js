import exifs2json from './src/exifs2json.js';

export default async (dir, output) => {
  await exifs2json(dir, output);
};
