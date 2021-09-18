import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([1, -1, 20, 49]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
