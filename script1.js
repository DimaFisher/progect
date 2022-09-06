// function firstTask() {
//     // Пишем решение вот тут
//     for (let i = 5; i <=10; i++){
//         console.log (i);
//     }
   
// }
// return firstTask();



// function secondTask() {
//     // Пишем решение вот тут
//     for (let i = 20; i >= 10; i--) {
//         if (i == 13) {
//               break;
//             }
//         console.log(i);
//     }
    
// }
// return secondTask();

// function thirdTask() {
//     // Пишем решение вот тут
//     for (let i = 1; i <= 10; i++) {
//         i = i + 1;
//         console.log(i);
//     }
   
    
// }
// //return thirdTask();



// let i = 2;
// while (i < 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log (i);
//     }
// }    


// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//  for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers.push(i);
//     }
//  console.log(arrayOfNumbers);
//     // Не трогаем
//     return arrayOfNumbers;
// }
// return fifthTask();


// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < 7; i++) {
//         result [i] = arr[i];
//     }
    
//     console.log(result);
//     console.log(arr);
//     // Не трогаем
//     return result;
// }



// //Для определения типа данных используйте typeof();
// //Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i <6; i++) 
//     {
//        if (typeof(data[i]) === "number") {
//          data[i] = data[i] * 2;
//          }
//        else if (typeof(data[i]) === "string") {
//         data [i] = data [i] + " - done";
//        }

//     } 
//    console.log (data);
//     // Не трогаем
//     return data;
// }


// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (i = 0; i < 5; i++) {
//        result[i] = data[(data.length - i) - 1];
//     }
//     console.log(result);
//     // Не трогаем
//     return result;
// }


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
    
//     for (let j = 0; j < lines-i; j++) {
//         result +=" ";
        
//     }
//     for (let k = 0; k < 2*i+1; k++) {
//         result +="*";
//     }
//     result +="\n";
// }
// console.log (result);



// for (let i = 0; i < 6; i++) { //! Эту строку можно изменить
//     for (let j = 0; j < 10; j++) {
//       if (i === 5 && j === 5)  {
//         break; //! Эту строку можно изменить
//       }
   
//       console.log(i, j);
//     }
//    }

//    let animal = {
//     name: "animal",
//     age: 10,
//     childs: ["child 1", "child 2"]
//    };
   
//    let cat = clone(animal);
//    cat.name = "cat";
//    cat.age = 5;
//    cat.childs.push("child 3");
   
//    console.log(cat.name, cat.age); // cat 5
//    console.log(cat.childs); // [ 'child 1', 'child 2', 'child 3' ]
   
//    console.log(animal.name, animal.age); // cat 5
//    console.log(animal.childs); // [ 'child 1', 'child 2', 'child 3' ]
   
//    function clone(obj) {
//     return obj;
//    }

//    function multiply(a, b) {
//     return a * b;
//   }

  
 
//   function sayHello(name) {
//     return ("Привет, " + name + "!");
// }
// console.log (sayHello("Витя"));
  



//   function returnNeighboringNumbers(x) {
//      return [--x , ++x , ++x];
// } 
// console.log (returnNeighboringNumbers(7));



// function getMathResult(num1, num2) {
//     if (typeof(num2) != 'number' ||  num2 <= 0 ) {
//       return num1;
//     }
//     let result = "";

//     for (let i = 1; i <= num2; i++) {
//         if (i === num2) {
//             result += num1 * i;
//         } else {
//             result += num1 * i +'---';
//         }
    
    
//     } 

//     return result;
// }    
// console.log (getMathResult(5, 9));



