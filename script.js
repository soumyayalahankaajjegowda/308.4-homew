//Part 1: Refreacting old code
const data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let currentData = "";
let counter = 1;
for (let i = 0; i < data.length; i++) {
  if (data[i] === ',' || data[i] === `\n`) {
    if (counter === 1) {
      cell1 = currentData
    } else if (counter === 2) {
      cell2 = currentData
    } else if (counter === 3) {
      cell3 = currentData
    } else if (counter === 4) {
      cell4 = currentData
      
    }
    counter++
    currentData = ""
    if (data[i] === `\n` ) {
      console.log( cell2, cell3, cell4);
      cell1 = cell2 = cell3 = cell4 = ""; // Reset cells
      counter = 1;
    }
  } else {
    if(data[i]!=="\n"){
      currentData += data[i]
    }
  }
  if (i === data.length - 1){
    console.log(cell1, cell2, cell3, cell4);
  }
}
console.log('___________________')

//Part 2: Expanding Functionality
const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function csvToArray(csvString, limit = ',') {
    const rows = csvString.split('\n');
    return rows.map(row => row.split(limit));
  }
const arrayData = csvToArray(csvString.toLowerCase()); // Also turned string into all lowercase before converting into an array (Part 3 to turn to lowercase)
    console.log(arrayData);
    
    console.log('___________________')

//Part 3: Transforming Data
//[{ id: "42", name: "Bruce",occupation: "Knight", age: "41" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
/* const obj = {
    ID: arrayData[1][0],
    Name: arrayData[1][1],
    Occupation: arrayData[1][2],
    Age: arrayData[1][3]
}
console.log(obj) */
//For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
    let newArr = [];
    
    function myFunc(newArr){
    for (let i = 0; i < arrayData.length; i++) {
      let row = arrayData[i]
      let obj ={
        id:row[0],
        name:row[1],
        occupation:row[2],
        age:row[3]
      }
      newArr.push(obj)
      }
      console.log(newArr);
    }
    myFunc(newArr);

    console.log('--------------------')

    const index = newArr.findIndex(obj => obj.id == 'id'); // returned =>> 0
    //console.log(index) //to find the index number
    //Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
    if (index > -1) {
      newArr.splice(0,1);
    }
    console.log(newArr);
    console.log('---------')

   
   
    /*  { id: 'id', name: 'name', occupation: 'occupation', age: 'age' },
  { id: '42', name: 'bruce', occupation: 'knight', age: '41' },
  { id: '57', name: 'bob', occupation: 'fry cook', age: '19' },
  { id: '63', name: 'blaine', occupation: 'quiz master', age: '58' },
  {
    id: '98',
    name: 'bill',
    occupation: 'doctor’s assistant',
    age: '26'
  } */

  //Part 4: Sorting and Manipulating Data
// 1. Remove the last element from the sorted array.

newArr.pop();
console.log(newArr); 
console.log('--------------');
//2. Insert the following object at index 1:

newArr.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log(newArr);
console.log('--------')

//3.Add the following object to the end of the array:
newArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(newArr);
console.log('---------')

let sum = 0; 
for (i = 0; i < newArr.length; i++){
  sum += parseInt(newArr[i].age)
}
avg = sum / newArr.length
console.log(avg)
console.log('-------------')
        //Part5: Full Circle
//transform the final set of data back into CSV format.

let csv = '';
const head = Object.keys(newArr[0]).join(",") + '\n';
let body = ''
for (val of newArr){
  body += Object.values(val).join(",") + "\n"
}
csv = head + body
console.log(csv)