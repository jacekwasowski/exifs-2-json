import fs from 'fs';

/**
 * @param {Object[]} data
 * @param {String} output: file name with path
 */
export default (data, output) => {
  fs.writeFile(output, JSON.stringify({ data }), (error) => {
    if (error) console.error('Error saving the file:', error); // eslint-disable-line no-console
  });
};
