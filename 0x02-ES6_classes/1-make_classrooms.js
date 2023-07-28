import ClassRoom from './0-classroom';

export default function initializeRooms() {
  let arr = [];
  const klass1 = new ClassRoom(19);
  const klass2 = new ClassRoom(20);
  const klass3 = new ClassRoom(34);

  arr = [klass1, klass2, klass3];
  return arr;
}
