const getExif = require('exif-async');
const clearExifBuffers = require('./clearExifBuffers');
const getFiles = require('./getFiles');
const saveFile = require('./saveFile');

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

module.exports = async (path, { noBuffers = true, output }) => {
  let data = await getExifs(path);

  if (noBuffers) data = clearExifBuffers(data);
  if (output) saveFile(data, output);

  return data;
};
