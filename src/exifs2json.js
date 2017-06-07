import fs from 'fs';
import getExif from 'exif-async';
import clearExifs from './clearExifs';
import getFiles from './getFiles';
import getLatLon from './getLatLon';
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

/**
 * Originally Exif data may not contain geo coordinates in Lat & Lon format, but degrees minutes seconds.
 * This is converter to Lat & Lon.
 * @param {Object[]} exifs
 * @returns {Object[]}
 */
function updateLatLon(exifs) {
  exifs.forEach((exif) => {
    exif.coordinates = getLatLon(exif);
  });
  return exifs;
}

export default async (dir, output) => {
  const getExifs = getFiles(dir).map(async (file) => {
    return Object.assign({ file }, await getExif(file));
  });

  Promise.all(getExifs)
    .then(clearExifs)
    .then(updateLatLon)
    .then((exifs) => { return saveExifs(exifs, output); })
    .catch(logError);
};
