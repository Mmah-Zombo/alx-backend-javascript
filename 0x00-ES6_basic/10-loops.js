/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const each of array) {
    arr.push(appendString + each);
  }

  return arr;
}
