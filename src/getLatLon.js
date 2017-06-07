import geoLib from 'geolib';

export default (exif) => {
  const gps = exif.gps || {};
  const lat = gps.GPSLatitude;
  const lon = gps.GPSLongitude;

  if (lat && lon &&
      lat[0] && lat[1] && lat[2] &&
      lon[0] && lon[1] && lon[2]) {
    return {
      lat: geoLib.sexagesimal2decimal(`${lat[0]}° ${lat[1]}' ${lat[2]}\" ${gps.GPSLatitudeRef}`),
      lon: geoLib.sexagesimal2decimal(`${lon[0]}° ${lon[1]}' ${lon[2]}\" ${gps.GPSLongitudeRef}`)
    };
  }
  return {};
};
