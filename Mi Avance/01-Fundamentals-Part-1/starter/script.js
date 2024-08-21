/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("manuel");
console.log(23);

let firstName = "Franchesca";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let manuel_Gordillo = "MG";
let $function = 27;

let person = "Manuel";
let PI = 3.1416;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "Teacher";

console.log(myFirstJob);

let country = "Peru";
let continent = "South America";
let population = "10 millon of persons";

console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Manuel");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);*/

// let age = 30;
// age = 31;

// const birthYear = 1991;
//birthYear = 1990;
//const job;

// var job = "programmer";
// job = "teacher";

// lastName = "Gordillo";
// console.log(lastName);

//const now = 2037;
//const ageSara = now - 2018;
//const ageJonas = now - 1991;
//console.log(ageJonas, ageSara);
//
//console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

//const firstName = "Jonas";
//const lastName = "Schemedtman";
//console.log(firstName + " " + lastName);

//ASSIGNMENT OPERATORS
//let x = 10 + 5;
//x += 10; // x = x + 10 = 25
//x *= 4; // x = x * 4 = 100
//x++; // x = x + 1 = 101
//x--; // x = x - 1 = 100
//x--; // x = x - 1 = 99
//console.log(x);

//Comparison Operators
//console.log(ageSara >= 18);
//console.log(ageJonas > ageSara); // >, <, >=, <=
//
//const isFullAge = ageSara >= 18;
//
//console.log(now - 1991 > now - 2018);
//
//console.log(25-10-5);
//
//let x, y;
//x = y = 25 - 10 -5; // x = y = 10, x = 10
//console.log(x,y);
//
//const averageAge = (ageJonas + ageSara) / 2;
//console.log(ageJonas, ageSara, averageAge);

//let massMark = 78;
//let heigthMark = 1.69;
//let massJohn = 92;
//let heigtJohn = 1.95;
//
//const BMIMark = massMark / heigthMark**2;
//const BMIJohn = massJohn / (heigtJohn*heigtJohn);
//
//console.log('Mark: ' + BMIMark, 'John: ' + BMIJohn);

//const firstName = 'Jonas';
//const job = 'teacher';
//const birthYear = 1991;
//const year = 2037;
//
//const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
//console.log(jonas);
//
//const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
//console.log(jonasNew);
//
//console.log(`Just a regular string...`);
//console.log('String with \n\
//multiple\n\
//lines');
//
//console.log(`String
//multiple
//lines`);

const age = 15;
//const isOldEnougth = age >= 18;

if (age >= 18) {
    console.log('Sara can star driving licence');   
}else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012; 

let century;

if(birthYear <= 2000){
    let century = 20;
}else{
    let century = 21;
}

console.log(century);
