#  exifs-2-json

> Get `Exif` data from JPG files from the folder and its sub-folders. Asynchronously. Export data to file or/and to a variable.

## Usage
```bash
npm install exifs-2-json
```

```javascript
import exifs2json from 'exifs-2-json';

// export to variable
const exifs = await exifs2json('/path/to/my/pictures');
console.log(exifs);

// export to file
const options = { output: '../output.json' }
await exifs2json('/path/to/my/pictures', options);
```

Returned data can be saved to a file or assigned to the variable, or both - to file and variable at the same time.

Use `options` to specify the output file name and path.

## Options
name | type | default | description
---|---|--- |---
output | string | _undefined_ | A file name with path. Without a value, the file will not be created.
noBuffers | boolean | true | With `true` all `Buffer` objects will be removed from Exif data. 

## Results

The module returns an array of objects with the following structure:

```json
{
  "data": [
    {
      "file": "path/image-1.jpg",
      "err": null,
      "exif": {...}
    },
    {
      "file": "path/image-2.jpg",
      "err": null,
      "exif": {...}
    },
    {
      "file": "path/no-image.jpg",
      "err": "The given image is not a JPEG and thus unsupported right now.",
      "exif": null
    }
  ]
}
```
A particular `Exif` object can look like below, but the properties and contents of the returned metadata might vary widely depending on the data saved in the file. You can expect dictionaries that look similar to this:

```json
{
  "exif": {
    "image": {
      "Make": "NIKON CORPORATION",
      "Model": "NIKON D5200",
      "Orientation": 1,
      "XResolution": 300,
      "YResolution": 300,
      "ResolutionUnit": 2,
      "Software": "Ver.1.00 ",
      "ModifyDate": "2020:09:04 09:07:09",
      "YCbCrPositioning": 2,
      "ExifOffset": 222,
      "GPSInfo": 15152
    },
    "thumbnail": {
      "Compression": 6,
      "XResolution": 300,
      "YResolution": 300,
      "ResolutionUnit": 2,
      "ThumbnailOffset": 15404,
      "ThumbnailLength": 8439,
      "YCbCrPositioning": 2
    },
    "exif": {
      "ExposureTime": 0.003125,
      "FNumber": 2.8,
      "ExposureProgram": 3,
      "ISO": 250,
      "SensitivityType": 2,
      "DateTimeOriginal": "2020:09:04 09:07:09",
      "CreateDate": "2020:09:04 09:07:09",
      "CompressedBitsPerPixel": 4,
      "ExposureCompensation": 0,
      "MaxApertureValue": 3,
      "MeteringMode": 5,
      "LightSource": 0,
      "Flash": 0,
      "FocalLength": 26,
      "SubSecTime": "30",
      "SubSecTimeOriginal": "30",
      "SubSecTimeDigitized": "30",
      "ColorSpace": 1,
      "ExifImageWidth": 6000,
      "ExifImageHeight": 4000,
      "InteropOffset": 15122,
      "SensingMethod": 2,
      "CustomRendered": 0,
      "ExposureMode": 0,
      "WhiteBalance": 0,
      "DigitalZoomRatio": 1,
      "FocalLengthIn35mmFormat": 26,
      "SceneCaptureType": 0,
      "GainControl": 0,
      "Contrast": 0,
      "Saturation": 0,
      "Sharpness": 0,
      "SubjectDistanceRange": 0
    },
    "gps": {
      "GPSVersionID": [2, 3, 0, 0],
      "GPSLatitudeRef": "N",
      "GPSLatitude": [46, 12, 21.096],
      "GPSLongitudeRef": "E",
      "GPSLongitude": [10, 51, 59.72039942938659],
      "GPSAltitudeRef": 0,
      "GPSAltitude": 1619.5112359550562
    },
    "interoperability": {
      "InteropIndex": "R98"
    },
    "makernote": {
      "error": "Unable to extract Makernote information as it is in an unsupported or unrecognized format."
    }
  }
}
```


## License
[MIT](https://github.com/jacekwasowski/exifs-2-json/blob/master/LICENSE)