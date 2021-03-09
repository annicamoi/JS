// 1. Creare and **array of 5 elements**. each element is a random number of eithetr 1 or 0
//Math.floor(Math.random() * 2) -> produce a random number of either 1 or 0
let chosenNumbers = [];

let counter = 0;


 while(true) {
 chosenNumbers[counter] = Math.floor(Math.random() * 2);

counter = counter + 1;

if (counter === 4) {
    break;
}
 }


console.log(chosenNumbers)

