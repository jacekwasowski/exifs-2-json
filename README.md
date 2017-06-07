#  Exifs to JSON

1. Get Exif data from your files from some directory (and all subdirectories)
2. Clear Exif data if needed (e.g. remove Buffers. Add your filters if needed)
3. Normalize geo data: latitude and longitude
4. Save as JSON file
5. Use this file as you want

## Usage

```javascript
import exifs2json from './src/exifs2json';

const dir = '/path/to/my/pictures';
const output = './output.json';

(async () => {
  await exifs2json(dir, output);
})();
```