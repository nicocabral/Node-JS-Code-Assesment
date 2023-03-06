
const questionFN1 = (number) => {
    console.log("Question 1 answer logs");
    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0 && i % 7 === 0) {
          console.log("Knose Pet Care Made Easy");
        } else if (i % 5 === 0) {
          console.log("Knose");
        } else if (i % 7 === 0) {
          console.log("Pet Care Made Easy");
        } else {
          console.log(i);
        }
    }
}  
// questionFN1(35) // Change the argument to print different result

const questionFN2 = (number) => {
    // const mid = Math.ceil(number / 2);    
    for (let i = 1; i <= number; i++) {
        let row = "";
        for (let j = 1; j <= number; j++) {
          if (j <= number - i) {
            row += "-";
          } else {
            row += "*";
          }
        }
    
        console.log(row);
     }
}
questionFN2(7); // Change the argument to print different size figures

const customSort = (data, dir = 'asc') => {
    for (let i = 0; i < data.length - 1; i++) {
      let index = i;
  
      for (let j = i + 1; j < data.length; j++) {
        if (dir === 'asc' && data[j] < data[index]) {
          index = j;
        }
        if (dir === 'desc' && data[j] > data[index]) {
            index = j;
        }
      }
  
      if (index !== i) {
        let temp = data[i];
        data[i] = data[index];
        data[index] = temp;
      }
    }
  
    return data;
  }
  
  const arr = [3, 2, 1, 5, 4];
  const sortedArr = customSort(arr); // Change the argument to return different results;
  console.log(sortedArr); // [1, 2, 3, 4, 5]
  