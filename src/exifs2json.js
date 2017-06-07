import fs from 'fs';
import getExif from 'exif-async';
import clearExifs from './clearExifs';
import getFiles from './getFiles';
import getLatLon from './getLatLon';
import logError from './logError';

/**
 * @param {{}} exifs
 * @param {String} output
 */
function saveExifs(exifs, output) {
  fs.writeFile(output, JSON.stringify({ exifs }), (error) => {
    if (error) {
      return logError(error);
    }
    return null;
  });
}

function updateGeoCoordinates(exifs) {
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
    .then(updateGeoCoordinates)
    .then((exifs) => { return saveExifs(exifs, output); })
    .catch(logError);
};
