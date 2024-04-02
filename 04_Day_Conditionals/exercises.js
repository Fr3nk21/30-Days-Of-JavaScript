// EXERCISES: Level 1
/* 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/
let age = prompt('Enter your age:');
let missingYears = 18 - age;

if (age >= 18) {
  console.log('You are old enough to drive');
} else {
  console.log(`You are left with ${missingYears} years to drive.`);
}

/* 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
Enter your age: 30
You are 5 years older than me.
*/ 
let age02 = prompt('Enter your age:');
let myAge = 33;
let differentAge = myAge - age02;

if (differentAge < 0) {
  console.log(`You are ${Math.abs(differentAge)} older then me`);
} else {
  console.log(`You are ${Math.abs(differentAge)} younger then me`);
}

/* 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
  using if else
  ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3
*/
let a = 10;
let b = 15;

if (a > b) {
  console.log('a is greater than b');
} else {
  console.log('a is less than b');
}

(a > b) ? console.log('a is greater than b') : console.log('a is less than b');

/* 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
  Enter a number: 2
  2 is an even number

  Enter a number: 9
  9 is is an odd number.
*/
let userNumber = prompt('Enter a number:');

if (userNumber % 2 === 0) {
  console.log(`${userNumber} is an even number`);
} else {
  console.log(`${userNumber} is an odd number`);
}


// EXERCISES: Level 2
/* 1. Write a code which can give grades to students according to theirs scores:
  80-100, A
  70-89, B
  60-69, C
  50-59, D
  0-49, F
*/
let grade = prompt('Insert your grade:');

if (grade >= 80) {
  console.log('A');
} else if (grade >= 70) {
  console.log('B');
} else if (grade >= 60) {
  console.log('C');
} else if (grade >= 50) {
  console.log('D');
} else if (grade >= 0) {
  console.log('F');
} else {
  console.log('Invalid grade input');
}

/* 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
  September, October or November, the season is Autumn.
  December, January or February, the season is Winter.
  March, April or May, the season is Spring
  June, July or August, the season is Summer
*/
let seasonUser = prompt(`What's the season?`);
let season = seasonUser.toLowerCase();

switch (season) {
  case 'september':
  case 'october':
  case 'november':
    console.log('We are in Autumn!')
    break;
  case 'december':
  case 'january':
  case 'february':
    console.log('We are in Winter!')
    break;
  case 'march':
  case 'april':
  case 'may':
    console.log('We are in Spring!')
    break;
  case 'june':
  case 'july':
  case 'august':
    console.log('We are in Summer!')
    break;
  default:
    console.log('Invalid season');
}

/* 3. Check if a day is weekend day or a working day. Your script will take day as an input.
  What is the day  today? Saturday
  Saturday is a weekend.

  What is the day today? saturDaY
  Saturday is a weekend.

  What is the day today? Friday
  Friday is a working day.

  What is the day today? FrIDAy
  Friday is a working day.
*/
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let userDay = prompt('Today is?');
let day = capitalizeFirstLetter(userDay.toLowerCase());

switch (day) {
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday':
    console.log(`${day} is a working day.`)
    break;
  case 'saturday':
  case 'sunday':
    console.log(`${day} is a weekend.`)
    break;
  default:
    console.log('Invalid day!');
}

// EXERCISES: Level 3
/* 1. Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/

let userMonth = prompt(`What you choose?`);
let month = userMonth.toLowerCase();

switch(month) {
  case 'january':
    console.log('January has 31 days');
    break;
  case 'february':
    console.log('February has 28 days');
    break;
  case 'march':
    console.log('March has 31 days');
    break;
  case 'april':
    console.log('April has 30 days');
    break;
  case 'may':
    console.log('May has 31 days');
    break;
  case 'june':
    console.log('June has 30 days');
    break;
  case 'july':
    console.log('July has 31 days');
    break;
  case 'august':
    console.log('August has 31 days');
    break;
  case 'september':
    console.log('September has 30 days');
    break;
  case 'october':
    console.log('October has 31 days');
    break;
  case 'november':
    console.log('November has 30 days');
    break;
  case 'december':
    console.log('December has 31 days');
    break;
  default:
    console.log('Wrong month!')
}

// 2. Write a program which tells the number of days in a month, now consider leap year.