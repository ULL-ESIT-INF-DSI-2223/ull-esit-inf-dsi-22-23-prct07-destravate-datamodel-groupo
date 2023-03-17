export abstract class Collection<T> {
  constructor(protected items: T[]) {   
  }

  removeItem(index: number): T {
    if (index >= 0 && index < this.items.length) {
      const removed = this.items[index];
      this.items.splice(index, 1);
      return removed;
    } else {
      console.log("El índice no se encuentra dentro del array.");
    }
  }

  addItem(newItem: T) {
    this.items.push(newItem);
    if (this.items[this.items.length - 1] === newItem) {
      return true;
    }
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getNumberOfItems() {
    return this.items.length;
  }
}