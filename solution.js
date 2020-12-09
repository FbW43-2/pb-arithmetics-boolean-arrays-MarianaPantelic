//Exercise 1
//1
let snackServings = 20;
let guests = 15;

//2
console.log(snackServings + guests); 
//Result: 35

//3
console.log(snackServings - guests); 
//Result: 5

//4
console.log(snackServings * guests); 
//Result: 300

//5
console.log(snackServings / guests); 
//Result: 1.33

//6
let drinks = 10;
let resultOne = (snackServings * guests) / drinks;
console.log(resultOne); //Result: 30

//7
let monkeys = 15;
let bananas = 9;
console.log(monkeys / bananas);                      
//Result: 1.66

//8
let monkeyfights = 20;
let resultTwo = (monkeys + bananas) * monkeyfights;
console.log(resultTwo);                             
//Result: 480

//9
monkeys++;
console.log(monkeys); 
//Result:16

//10
bananas--;
console.log(bananas); 
//Result:8

//11
let happiness = bananas - monkeys;
console.log(happiness + monkeyfights); 
//Result: 12

//12
console.log(resultOne % resultTwo); 
//Result: 30



//Exercise 2
let firstName, givenName;
firstName = 'Stacey';
let name = givenName || firstName || 'John'; 
console.log(name);
//Result: Stacey. Because he shows the only true in this case: firstName = "Stacey", givenName and 'John' are undefined, so false.



//Exercise 3
//1
let myArray = ["Name", "Age", "Address", "IBAN", "Phone"];
console.log(myArray);                                      
//Result: [ 'Name', 'Age', 'Address', 'IBAN', 'Phone' ]

//2
let thirdElement = myArray[2];
console.log(thirdElement);     
//Result: Address

//3
myArray[3] = "fourth element";
console.log(myArray);          
//Result: [ 'Name', 'Age', 'Address', 'fourth element', 'Phone' ]



//Exercise 4
//Q1
let sales = 6450;
let ticketPrice = 15;
let tickets = sales /ticketPrice;
console.log(tickets);             
//Result: 430

//or, more simple
console.log(6450/15);  
//Result: 430

//Q2
let incomeWeek = 500;
let incomeYear = incomeWeek * 52;
console.log(incomeYear);            
//Result: 26000

//Q3
let number = 17 / 30;
console.log(number);
let percentage = number * 100;
console.log(percentage);        
//Result: 56.66

//Q4
let side = 4.75;
let squarePerimeter = 4 * side;
console.log(squarePerimeter);   
//Result: 19

//Q5
let s1 = 5, s2=6, s3=7;
let trianglePerimeter = s1 + s2 + s3;
console.log(trianglePerimeter);        
//Result: 18

//Q6
let side1 = 5;
let squareArea = side1 ** 2; // or let squareArea = side1 * side1
console.log(squareArea);
//Result: 25

//Q7
//Used Heron's Formula
let s = trianglePerimeter / 2;
let triangleArea = Math.sqrt((s - s1) * (s - s2) * (s - s3)); 
console.log(triangleArea);
//Result: 4.89

//Q8
let cubeSide = 9;
let cubeArea = 6 * (cubeSide ** 2);
console.log(cubeArea);                  
//Result: 486

//Q9
let bill1 = (22.35 / 100) * 110;
let bill2 = (26.67 / 100) * 115;
let bill3 = (35.92 / 100) * 120;
console.log(bill1, bill2, bill3);
//Result: 24.585 , 30.6705 , 43.104

//Q10
let averageHours = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log(averageHours);
//Result: 5.85

//Q11
let score5Tests = (75 + 70 + 85 + 90 + 100);
let scoreAverage = 85;
let score6 = (scoreAverage * 6) - score5Tests;
console.log(score6);
//Result: 90

//Q12
let averageTotal = 80;
let average8Ass = 78;
let ass9 = (averageTotal * 9) - (average8Ass * 8);
console.log(ass9);
//Result: 96






