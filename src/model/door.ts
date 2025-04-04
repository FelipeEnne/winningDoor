export default class DoorModel {
  #number: number;
  #gift: boolean;
  #selected: boolean;
  #open: boolean;

  constructor(number: number, gift = false, selected = false, open = false) {
    this.#number = number;
    this.#gift = gift;
    this.#selected = selected;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }

  get gift() {
    return this.#gift;
  }

  get selected() {
    return this.#selected;
  }

  get open() {
    return this.#open;
  }

  get closed() {
    return !this.#open;
  }

  uncheckSelection() {
    const selected = false;
    return new DoorModel(this.number, this.gift, selected, this.open);
  }

  toggleSelection() {
    const selected = !this.selected;
    return new DoorModel(this.number, this.gift, selected, this.open);
  }

  openDoor() {
    const open = true;
    return new DoorModel(this.number, this.gift, this.selected, open);
  }
}
