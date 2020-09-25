import fs from 'fs';
import getExif from 'exif-async';
import clearExifs from './clearExifs';
import getFiles from './getFiles';
import logError from './logError';

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

export default async (dir, output) => {
  const getExifs = getFiles(dir).map(async (file) => {
    return Object.assign({ file }, await getExif(file));
  });

  Promise.all(getExifs)
    .then(clearExifs)
    .then((exifs) => { return saveExifs(exifs, output); })
    .catch(logError);
};
