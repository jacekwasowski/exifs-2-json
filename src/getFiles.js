import fs from 'fs';
import path from 'path';

export default function walkSync(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      fileList = walkSync(path.join(dir, file), fileList); // eslint-disable-line no-param-reassign
    } else if ((/\.(jpe?g)$/i).test(file.toLowerCase())) {
      fileList.push(path.join(dir, file));
    }
  });

  return fileList;
}
