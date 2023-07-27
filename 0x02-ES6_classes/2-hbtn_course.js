export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }
  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }

  set name(name) {
    this._name = name;
  }
  set length(length) {
    this._length = length;
  }
  set students(students) {
    this._students = students;
  }
}