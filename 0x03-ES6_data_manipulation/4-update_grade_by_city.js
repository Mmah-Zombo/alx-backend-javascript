/* eslint-disable linebreak-style */
export default function updateStudentGradeByCity(listt, city, newGrades) {
  const defaultgrade = { grade: 'N/A' };
  const citystud = listt.filter((stud) => stud.location === city);
  const newList = citystud.map((stud) => ({
    id: stud.id,
    firstName: stud.firstName,
    location: stud.location,
    grade: (newGrades.filter((grd) => (grd.studentId === stud.id)).pop() || defaultgrade).grade,
  }));
  return newList;
}
