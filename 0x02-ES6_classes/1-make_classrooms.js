import ClassRoom from "./0-classroom";

export default function initializeRooms () {
  let arr = [];
  let klass1 = ClassRoom(19);
  let klass2 = ClassRoom(20);
  let klass3 = ClassRoom(34);

  arr = [klass1, klass2, klass3];
  return arr;
}