const customSort = (list) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
};
let myList = [9, 2, 5, 6, 7, 8, 1];

let sortedList = customSort(myList);
console.log(sortedList);
