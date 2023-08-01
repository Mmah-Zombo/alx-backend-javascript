/* eslint-disable linebreak-style */
export default function getStudentIdsSum(students) {
  const initialV = 0;
  return students.reduce((sum, currentV) => currentV.id + sum, initialV);
}
