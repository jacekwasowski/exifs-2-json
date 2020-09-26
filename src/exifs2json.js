import getExif from 'exif-async';
import clearExifs from './clearExifs.js';
import getFiles from './getFiles.js';
import saveFile from './saveFile.js';

function to(promise) {
  return promise
    .then((data) => { return [null, data]; })
    .catch((err) => { return [err || new Error(), null]; });
}

async function getExifFromFile(file) {
  const [err, exif] = await to(getExif(file));
  return {
    file,
    err: (err && err.message) || null,
    exif
  };
}

function getExifs(dir) {
  const files = getFiles(dir);
  return Promise.all(files.map(getExifFromFile));
}

export default async (path, { clearBuffers = true, output }) => {
  let data = await getExifs(path);

  if (clearBuffers) data = clearExifs(data);
  if (output) saveFile(data, output);

  return data;
};
