//Exercise 1
//1
let snackServings = 20;
let guests = 15;

//2
console.log(snackServings + guests); //Result: 35

//3
console.log(snackServings - guests); //Result: 5

//4
console.log(snackServings * guests); //Result: 300

//5
console.log(snackServings / guests); //Result: 1.33

//6
let drinks = 10;
let resultOne = (snackServings * guests) / drinks;
console.log(resultOne); //Result: 30

//7
let monkeys = 15;
let bananas = 9;
console.log(monkeys / bananas);                      //Result: 1.66

//8
let monkeyfights = 20;
let resultTwo = (monkeys + bananas) * monkeyfights;
console.log(resultTwo);                             //Result: 480

//9
monkeys++;
console.log(monkeys); //Result:16

//10
bananas--;
console.log(bananas); //Result:8

//11
let happiness = bananas - monkeys;
console.log(happiness + monkeyfights); //Result: 12

//12
console.log(resultOne % resultTwo); //Result: 30


//Exercise 2
let firstName, givenName;
firstName = 'Stacey';
let name = givenName || firstName || 'John'; 
console.log(name);
//Result: Stacey. Because he shows the only true in this case: firstName = "Stacey", givenName and 'John' are undefined, so false.

