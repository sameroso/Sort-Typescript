class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // If collection is an array of number
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
      }

      // If collection is a string
      if (typeof this.collection === "string") {
      
      }
    }
  }
}

const sorter = new Sorter([4, 9, 2, -4, 7, 8]);
sorter.sort();
console.log(sorter.collection);
