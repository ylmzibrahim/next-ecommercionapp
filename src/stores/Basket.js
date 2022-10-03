import { makeAutoObservable } from 'mobx';

class Basket {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  get totalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  get totalItems() {
    return this.items.length;
  }

  get items() {
    return this.items;
  }
}

export default new Basket();
