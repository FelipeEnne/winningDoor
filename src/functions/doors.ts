import DoorModel from "@/model/door";

export function createDoor(q: number, selected: number): DoorModel[] {
  return Array.from({ length: q }, (_, i) => {
    const number = i + 1;
    const hasGift = number === selected;
    return new DoorModel(number, hasGift);
  });
}

export function updateDoors(
  doors: DoorModel[],
  updatedDoors: DoorModel
): DoorModel[] {
  return doors.map((currentDoor) => {
    const isUpdated = currentDoor.number === updatedDoors.number;

    if (isUpdated) {
      return updatedDoors;
    } else {
      return updatedDoors.open ? currentDoor : currentDoor.uncheckSelection();
    }
  });
}
