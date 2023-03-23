import { Group } from "./group";
import { Collection } from "./collection";

/**
 * Group collection extended from abstract class Colection.
 */
export class GroupCollection extends Collection<Group> {
  constructor(groups: Group[]){
    super(groups)
  }

  /**
   * Sort groups based on names alphabetically in ascending order.
   * @returns the group collection sorted.
   */
  alphabeticNameSortAscend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()));
  }

  /**
   * Sort groups based on names alphabetically in descending order.
   * @returns the group collection sorted.
   */
  alphabeticNameSortDescend() {
    return this.items.sort((a, b) => a.getName().localeCompare(b.getName()) * (-1));
  }

  /**
   * Sort groups based on Kms per week in ascending order.
   * @returns the group collection sorted.
   */
  kmsSortAscendWeek() {
    return this.items.sort((a, b) => a.getStats().kmWeek - b.getStats().kmWeek)
  }

  /**
   * Sort groups based on Kms per week in descending order.
   * @returns the group collection sorted. 
   */
  kmsSortDescendWeek() {
    return this.items.sort((a, b) => b.getStats().kmWeek - a.getStats().kmWeek)
  }

  /**
   * Sort groups based on Kms per month in ascending order.
   * @returns the group collection sorted. 
   */
  kmsSortAscendMonth() {
    return this.items.sort((a, b) => a.getStats().kmMonth - b.getStats().kmMonth)
  }

  /**
   * Sort groups based on Kms per month in descending order.
   * @returns the group collection sorted. 
   */
  kmsSortDescendMonth() {
    return this.items.sort((a, b) => b.getStats().kmMonth - a.getStats().kmMonth)
  }

  /**
   * Sort groups based on Kms per year in ascending order.
   * @returns the group collection sorted. 
   */
  kmsSortAscendYear() {
    return this.items.sort((a, b) => a.getStats().kmYear - b.getStats().kmYear)
  }

  /**
   * Sort groups based on Kms per year in descending order.
   * @returns the group collection sorted. 
   */
  kmsSortDescendYear() {
    return this.items.sort((a, b) => b.getStats().kmYear - a.getStats().kmYear)
  }  

  /**
   * Sort groups based on the number of members in ascending order.
   * @returns the group collection sorted.
   */
  membersSortAscend() {
    return this.items.sort((a, b) => a.getNumberOfMembers() - b.getNumberOfMembers())
  }

  /**
   * Sort groups based on the number of members in descending order.
   * @returns the group collection sorted. 
   */
  membersSortDescend() {
    return this.items.sort((a, b) => b.getNumberOfMembers() - a.getNumberOfMembers())
  }

  /**
   * Get the length of the collection.
   * @returns the length collection.
   */
  getLength() {
    return this.items.length;
  }

  /**
   * Get the groups of the collection
   */
  showGroups() {
    this.items.forEach(group => {
      console.log(group.Id, group.getName());
    });
  }

  /**
   * Get a group by it's id
   * @param id id of the group get
   * @returns a group found by his id
   */
  getGroupById(id: number) {
    return this.items.find(group => group.Id === id);
  }

}