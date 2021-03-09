
/**
 * 1. generate 5 randomize numbers
 * 2. make those random no's either 0 or 1
 * 3. check what is the combination that we get
 * 4. Decide whether the user has won or not
 * 5. display the message according the result
 */

 let number1 = Math.floor(Math.random () * 10) ;
 let number2 = Math.floor(Math.random() * 10) ; 
 let number3 = Math.floor(Math.random() * 10) ; 
 let number4 = Math.floor(Math.random() * 10) ; 
 let number5 = Math.floor(Math.random() * 10) ; 

 console.log (number1, number2, number3, number4, number5);

     number1 = (number1 % 2 === 0) ? 0 : 1;
     number2 = (number2 % 2 === 0) ? 0 : 1;
     number3 = (number3 % 2 === 0) ? 0 : 1;
     number4 = (number4 % 2 === 0) ? 0 : 1;
     number5 = (number5 % 2 === 0) ? 0 : 1;

     console.log(number1, number2, number3, number4, number5);

     const sum= number1 + number2 + number3 + number4 + number5

//      if (number1 === 1 && number2 === && number3 === 1)

//  }

 if (sum === 5) {
     console.log ("win")
 } else if (sum === 0) {
     console.log ("all zeros")

 }

 if (sum >= 3) {
     console.log ("smaller prize")
 }