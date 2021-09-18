import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([1, -1, 20, 49]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("samer");
// const sorter = new Sorter(charactersCollection);
// sorter.sort()

// console.log(charactersCollection.data);

const linkedList = new LinkedList();
const sorter = new Sorter(linkedList);

linkedList.add(1);
linkedList.add(-3);
linkedList.add(-9);
sorter.sort();
linkedList.print();