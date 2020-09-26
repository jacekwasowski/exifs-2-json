import fs from 'fs';
import logError from './logError.js';

/**
 * @param {Object[]} data
 * @param {String} output: file name with path
 */
export default (data, output) => {
  fs.writeFile(output, JSON.stringify({ data }), (error) => {
    if (error) {
      return logError(error);
    }
    return null;
  });
};
