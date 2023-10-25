'use strict';

let userName = prompt('What is your name?');
alert('Welcome to my website ' + userName);

let dog = prompt('Do I own a mini dachshund?');

dog = dog.toLowerCase();

if (dog === 'yes' || dog === 'y') {
  alert('Correct, I do!');
} else {
  alert('Nope, I do');
}

let flavor = prompt('Is tonkotsu my favorite ramen flavor?');

flavor = flavor.toLowerCase();

switch (flavor) {
case 'yes':
case 'y':
  alert('Yes and it\'s also my dog\'s name too!');
  break;
default:
  alert('It really is actually');
}

let city = prompt('Do I currently live in Kailua, HI?');

city = city.toLowerCase();

if (city === 'yes' || city === 'y') {
  alert('I wish, but not correct!');
} else {
  alert('Yep, I no longer live there');
}

let experience = prompt('Did I serve in the Navy?');

experience = experience.toLowerCase();

switch (city) {
case 'yes':
case 'y':
  alert('Correct for 9 years!');
  break;
default:
  alert('Nope I did for 9 years');
}

let code = prompt('Is my favorite coding language CSS?');

code = code.toLowerCase();

switch (code) {
case 'no':
case 'n':
  alert('Right, who really likes that anyways?');
  break;
default:
  alert('Haha defintely not');
}

alert('Thanks for answering all those questions about me, ' + userName);

console.log(userName);
console.log(dog);
console.log(flavor);
console.log(city);
console.log(experience);
console.log(code);
