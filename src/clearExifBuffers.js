function clearExifBuffers(exif) {
  if (!exif || !Object.keys(exif)) return null;

  const exifCopy = { ...exif };

  Object.keys(exifCopy).forEach((exifElem) => {
    Object.keys(exifCopy[exifElem]).forEach((elem) => {
      if (Buffer.isBuffer(exif[exifElem][elem])) {
        delete exifCopy[exifElem][elem];
      }
    });
  });

  return exifCopy;
}

export default (data) => {
  data.forEach(({ exif }) => {
    clearExifBuffers(exif);
  });

  return data;
};
