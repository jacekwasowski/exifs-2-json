// extend this functionality if needed

const CLEAR_BUFFER = true;

function clearBuffers(exif) {
  Object.keys(exif).forEach((exifElem) => {
    Object.keys(exif[exifElem]).forEach((elem) => {
      if (Buffer.isBuffer(exif[exifElem][elem])) {
        delete exif[exifElem][elem];
      }
    });
  });

  return exif;
}

export default (exifs) => {
  exifs.forEach((exif) => {
    if (CLEAR_BUFFER) {
      clearBuffers(exif);
    }
  });

  return exifs;
};
