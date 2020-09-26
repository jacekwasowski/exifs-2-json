function clearBuffers(exif) {
  if (!exif || !Object.keys(exif)) return null;

  Object.keys(exif).forEach((exifElem) => {
    Object.keys(exif[exifElem]).forEach((elem) => {
      if (Buffer.isBuffer(exif[exifElem][elem])) {
        delete exif[exifElem][elem];
      }
    });
  });

  return exif;
}

export default (data) => {
  data.forEach(({ exif }) => {
    clearBuffers(exif);
  });

  return data;
};
