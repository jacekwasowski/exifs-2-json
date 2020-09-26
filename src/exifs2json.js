import fs from 'fs';
import getExif from 'exif-async';
import clearExifs from './clearExifs.js';
import getFiles from './getFiles.js';
import logError from './logError.js';

function to(promise) {
  return promise
    .then((data) => { return [null, data]; })
    .catch((err) => { return [err || new Error(), null]; });
}

/**
 * @param {Object[]} exifs
 * @param {String} output: file name with path
 */
function saveExifs(exifs, output) {
  fs.writeFile(output, JSON.stringify({ exifs }), (error) => {
    if (error) {
      return logError(error);
    }
    return null;
  });
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
  if (output) saveExifs(data, output);

  return data;
};
