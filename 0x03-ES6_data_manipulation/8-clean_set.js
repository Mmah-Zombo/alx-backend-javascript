/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
export default function cleanSet(set, startString) {
  const arr = [];
  if (startString === '') {
    return '';
  }
  for (let each of set) {
    if (each.startsWith(startString)) {
      each = each.replace(startString, '');
      arr.push(String(each));
    }
  }

  return arr.join('-');
}
