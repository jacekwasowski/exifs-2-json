import getExif from 'exif-async';
import clearExifBuffers from './clearExifBuffers.js';
import getFiles from './getFiles.js';
import saveFile from './saveFile.js';

function to(promise) {
  return promise
    .then((data) => [null, data])
    .catch((err) => [err || new Error(), null]);
}

async function getExifFromFile(file) {
  const [err, exif] = await to(getExif(file));
  return {
    file,
    err: (err && err.message) || null,
    exif,
  };
}

function getExifs(dir) {
  const files = getFiles(dir);
  return Promise.all(files.map(getExifFromFile));
}

export default async (path, { noBuffers = true, output }) => {
  let data = await getExifs(path);

  if (noBuffers) data = clearExifBuffers(data);
  if (output) saveFile(data, output);

  return data;
};
