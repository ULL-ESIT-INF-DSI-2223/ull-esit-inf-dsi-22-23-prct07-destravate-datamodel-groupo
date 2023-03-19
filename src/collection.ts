/**
 * The abstract class collection of items. Generic class.
 */
export abstract class Collection<T> {
  /**
   * Constructor's class.
   * @param items Array of items of generic's type.
   */
  constructor(protected items: T[]) {   
  }

  /**
   * Remove an item from the collection.
   * @param index index of an item of the collection.
   * @returns the removed item.
   */
  removeItem(index: number): T {
      const removed = this.items[index];
      this.items.splice(index, 1);
      return removed;
  }

  /**
   * Add an item to the collection.
   * @param newItem the new item to add to the collection.
   * @returns True if the item was added.
   */
  addItem(newItem: T) {
    this.items.push(newItem);  
    return true;
  }

  /**
   * Get an item to the collection.
   * @param index index item to get from the collection.
   * @returns the item selected.
   */
  getItem(index: number): T {
    return this.items[index];
  }

  /**
   * Get the number of items from the collection.
   * @returns the number of items.
   */
  getNumberOfItems() {
    return this.items.length;
  }
}