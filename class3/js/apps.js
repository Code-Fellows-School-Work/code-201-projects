//ensures strict JS standard
'use strict';

//asks user their name upon entering website
let userName = prompt('What is your name?');
console.log(userName);
alert('Welcome to my website ' + userName);

//y or n question using if.. else statement
let dog = prompt('Do I own a mini dachshund?');
dog = dog.toLowerCase();
console.log(dog);
if (dog === 'yes' || dog === 'y') {
  alert('Correct, I do!');
} else {
  alert('Nope, I do');
}

//y or n question using switch statement
let flavor = prompt('Is tonkotsu my favorite ramen flavor?');
flavor = flavor.toLowerCase();
console.log(flavor);
switch (flavor) {
case 'yes':
case 'y':
  alert('Yes and it\'s also my dog\'s name too!');
  break;
default:
  alert('It really is actually');
}

//y or n question using if.. else statement
let city = prompt('Do I currently live in Kailua, HI?');
city = city.toLowerCase();
console.log(city);
if (city === 'yes' || city === 'y') {
  alert('I wish, but not correct!');
} else {
  alert('Yep, I no longer live there');
}

//y or n question using switch statement
let experience = prompt('Did I serve in the Navy?');
experience = experience.toLowerCase();
console.log(experience);
switch (city) {
case 'yes':
case 'y':
  alert('Correct for 9 years!');
  break;
default:
  alert('Nope I did for 9 years');
}

//y or n question using switch statement
let code = prompt('Is my favorite coding language CSS?');
code = code.toLowerCase();
console.log(code);
switch (code) {
case 'no':
case 'n':
  alert('Right, who really likes that anyways?');
  break;
default:
  alert('Haha defintely not');
}

//number question asking user to guess a number and responding if number is too high or too low
//also has 4 attemps otherwise give answer to user after 4th incorrect attempt
let myAge = 31;
for (let i = 1; i < 5; i++){
  console.log(i);
}

//personally thanking user with added name for answering all questions
alert('Thanks for answering all those questions about me, ' + userName);
