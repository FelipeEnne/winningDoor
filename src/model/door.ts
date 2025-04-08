export default class DoorModel {
  #number: number;
  #gift: boolean;
  #withGift: boolean;
  #open: boolean;

  constructor(number: number, gift = false, withGift = false, open = false) {
    this.#number = number;
    this.#gift = gift;
    this.#withGift = withGift;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }

  get gift() {
    return this.#gift;
  }

  get withGift() {
    return this.#withGift;
  }

  get open() {
    return this.#open;
  }

  get closed() {
    return !this.#open;
  }

  uncheckSelection() {
    const withGift = false;
    return new DoorModel(this.number, this.gift, withGift, this.open);
  }

  toggleSelection() {
    const withGift = !this.withGift;
    return new DoorModel(this.number, this.gift, withGift, this.open);
  }

  openDoor() {
    const open = true;
    return new DoorModel(this.number, this.gift, this.withGift, open);
  }
}
