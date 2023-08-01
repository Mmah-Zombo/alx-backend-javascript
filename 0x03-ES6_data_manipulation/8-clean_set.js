/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
export default function cleanSet(set, startString) {
  const arr = [];
  for (const each of set) {
    if (each.startsWith(startString)) {
      each.replace(startString, '');
      arr.push(each);
    }
  }

  return arr.join('-');
}
