//ensures strict JS standard
'use strict';

// asks user their name upon entering website
function askName(){
  let userName = prompt('What is your name?');
  console.log(userName);
  alert('Welcome to my website ' + userName);
}

askName();
//created global variable to start answer correct answer counter
let correctAnswers = 0;

// y or n question using if.. else statement
function askDog(){
  let dog = prompt('Do I own a mini dachshund?');
  dog = dog.toLowerCase();
  console.log(dog);
  if (dog === 'yes' || dog === 'y') {
    alert('Correct, I do!');
    correctAnswers++; //added to count correct answer
  } else {
    alert('Nope, I do');
  }
}

askDog();

// y or n question using switch statement
function askFlavor(){
  let flavor = prompt('Is tonkotsu my favorite ramen flavor?');
  flavor = flavor.toLowerCase();
  console.log(flavor);
  switch (flavor) {
  case 'yes':
  case 'y':
    alert('Yes and it\'s also my dog\'s name too!');
    correctAnswers++; //added to count correct answer
    break;
  default:
    alert('It really is actually');
  }
}

askFlavor();

// y or n question using if.. else statement
function askCity(){
  let city = prompt('Do I currently live in Kailua, HI?');
  city = city.toLowerCase();
  console.log(city);
  if (city === 'yes' || city === 'y') {
    alert('I wish, but not correct!');
    correctAnswers++; //added to count correct answer
  } else {
    alert('Yep, I no longer live there');
  }
}

askCity();

// y or n question using switch statement
function askExperience(){
  let experience = prompt('Did I serve in the Navy?');
  experience = experience.toLowerCase();
  console.log(experience);
  switch (experience) {
  case 'yes':
  case 'y':
    alert('Correct for 9 years!');
    correctAnswers++; //added to count correct answer
    break;
  default:
    alert('Nope I did for 9 years');
  }
}

askExperience();

// y or n question using switch statement
function askCode(){
  let code = prompt('Is my favorite coding language CSS?');
  code = code.toLowerCase();
  console.log(code);
  switch (code) {
  case 'no':
  case 'n':
    alert('Right, who really likes that anyways?');
    correctAnswers++; //added to count correct answer
    break;
  default:
    alert('Haha defintely not');
  }
}

askCode();

// number question asking user to guess a number and responding if number is too high or too low
// also has 4 attemps otherwise give answer to user after 4th incorrect attempt
let myAge = 31;
function askAge(){
  for (let i = 1; i <= 4; i++) {
    let userGuess = prompt('Guess my age');
    console.log(userGuess);
    if (userGuess == myAge) {
      alert('You got it right!');
      correctAnswers++; //added to count correct answer
      break;
    } else if (userGuess < myAge) {
      alert('Too low, try again');
    } else if (userGuess > myAge) {
      alert('Too high, try again');
    }
    if (i === 4) {
      alert('Sorry that was your 4th attempt, the correct answer is 31.');
    }
  }
}

askAge();

//created loop for array question
let myMascot = ['Padres', 'Jaguars', 'Chargers'];
function askMascot(){
  for (let i = 1; i <= 6; i++) {
    let mascotGuess = prompt('Guess a mascot for my favorite sports team');
    console.log(mascotGuess);

    if (myMascot.includes(mascotGuess)) {
      alert('You guessed right!');
      correctAnswers++; //added to count correct answer
      break;
    } else {
      alert('Try again');
    }

    //after 6th attempt, lists the array within the webpage as alerts. I don't know how to join the array into a single alert
    if (i === 6) {
      let mascots = myMascot[0] + ', ' + myMascot[1] + ', ' + myMascot[2];
      alert('Sorry that was your 6th attempt. Here are the mascots for my favorite sports team: ' + mascots);
    }
  }
}

askMascot();

// personally thanking user with added name for answering all questions
alert('Thanks for playing! Correct answers: ' + correctAnswers);
