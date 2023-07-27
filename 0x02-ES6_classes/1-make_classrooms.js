import ClassRoom from "./0-classroom";

export default function initializeRooms () {
  let arr = [];
  let klass1 = new ClassRoom(19);
  let klass2 = new ClassRoom(20);
  let klass3 = new ClassRoom(34);

  arr = [klass1, klass2, klass3];
  return arr;
}