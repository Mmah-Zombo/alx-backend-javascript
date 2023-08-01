/* eslint-disable linebreak-style */
export default function hasValuesFromArray(set, array) {
  array.every((e) => (set.has(e)));
  return true;
}
