// EXERCISES: Level 1
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Kent';
let lastName = 'Block';
let country= 'Australia';
let city = 'Melbourne';
let age = 45;
let isMarried = yes;
let year = 1960;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
let str = '10';
let num = 10;

console.log(str === num);

// 3. Check if parseInt('9.8') is equal to 10
let num03 = parseInt('9.8')
let num04 = 10

console.log(num03 === num04);

/* 4. Boolean value is either true or false.
      i. Write three JavaScript statement which provide truthy value.
      ii. Write three JavaScript statement which provide falsy value.
*/
let num05 = 2
let num06 = 3
let num07 = 4
let num08 = 2
let num09 = 3
let num10 = 4

console.log(num05 === num08)
console.log(num06 === num09)
console.log(num07 === num10)

console.log(num05 === num09)
console.log(num06 === num08)
console.log(num07 === num08)

/* 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
      i. 4 > 3
      ii. 4 >= 3
      iii. 4 < 3
      iv. 4 <= 3
      v. 4 == 4
      vi. 4 === 4
      vii. 4 != 4
      viii. 4 !== 4
      ix. 4 != '4'
      x. 4 == '4'
      xi. 4 === '4'
      xii. Find the length of python and jargon and make a falsy comparison statement.
*/
let resulti = 4 > 3;
console.log(resulti);

let resultii = 4 >= 3;
console.log(resultii);

let resultiii = 4 < 3;
console.log(resultiii);

let resultiv = 4 <= 3;
console.log(resultiv);

let resultv = 4 == 4;
console.log(resultv);

let resultvi = 4 === 4;
console.log(resultvi);

let resultvii = 4 != 4;
console.log(resultvii);

let resultviii = 4 !== 4;
console.log(resultviii);

let resultix = 4 != '4';
console.log(resultix);

let resultx = 4 == '4';
console.log(resultx);

let resultxi = 4 === '4';
console.log(resultxi);

let resultxii1 = 'python';
let resultxii2 = 'jargon';
console.log(resultxii1.length === resultxii2.length + 2);

/* 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
      i. 4 > 3 && 10 < 12
      ii. 4 > 3 && 10 > 12
      iii. 4 > 3 || 10 < 12
      iv. 4 > 3 || 10 > 12
      v. !(4 > 3)
      vi. !(4 < 3)
      vii. !(false)
      viii. !(4 > 3 && 10 < 12)
      ix. !(4 > 3 && 10 > 12)
      x. !(4 === '4')
      xi. There is no 'on' in both dragon and python
*/
let vari = 4 > 3 && 10 < 12
console.log(vari)

let varii = 4 > 3 && 10 > 12
console.log(varii)

let variii = 4 > 3 || 10 < 12
console.log(variii)

let variv = 4 > 3 || 10 > 12
console.log(variv)

let varv = !(4 > 3)
console.log(varv)

let varvi = !(4 < 3)
console.log(varvi)

let varvii = !(false)
console.log(varvii)

let varviii = !(4 > 3 && 10 < 12)
console.log(varviii)

let varix = !(4 > 3 && 10 > 12)
console.log(varix)

let x = !(4 === '4')
console.log(varx)

let word1 = 'dragon'
let word2 = 'python'

let containsOnInWord1 = word1.includes('on')
let containsOnInWord2 = word2.includes('on')

let result = !containsOnInWord1 && !containsOnInWord2

console.log('Result:', result)

/* 7. Use the Date object to do the following activities
      i. What is the year today?
      ii. What is the month today as a number?
      iii. What is the date today?
      iv. What is the day today as a number?
      v. What is the hours now?
      vi. What is the minutes now?
      vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

let date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth() + 1)
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getMinutes())

console.log(Math.floor(now.getTime() / 1000))

// EXERCISES: Level 2
/* 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100
*/
let base = prompt('Add the base of your triangle');
let height = prompt('Add the height of your triangle');
console.log('The area of your triangle is ' + (0.5 * base * height));

/* 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/
let sideA = prompt('Add the value for side A');
let sideB = prompt('Add the value for side B');
let sideC = prompt('Add the value for side C');
console.log('The perimeter of your triangle is ' + (a + b + c));


// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Add the length of your rectangle');
let width = prompt('Add the width of your rectangle');

console.log('The area of your rectangle is ' + (length * width));
console.log('The perimeter of your rectangle is ' + (2 * (length + width)));

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt('Add the radius of your circle');
let pi = 3.14;

console.log('The radius of your circle is ' + (pi * radius * radius));
console.log('The circumference of your circle is ' + (2 * pi * radius));

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let xIntercept = prompt('What the x-interception');
let yIntercept = prompt('What the y-interception');

console.log('The slope is ' + );

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let xIntercept = prompt('What the x-interception');
let yIntercept = prompt('What the y-interception');

console.log('The slope is ' + );

// 7. Compare the slope of above two questions.
let xIntercept = prompt('What the x-interception');
let yIntercept = prompt('What the y-interception');

console.log('The slope is ' + );

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let xIntercept = prompt('What the x-interception');
let yIntercept = prompt('What the y-interception');

console.log('The slope is ' + );

/* 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
let rate = prompt('How much do you get pay for hour');
let hours = prompt('How many hours did you worked today?')

console.log('Your weekly earning is ' + (rate * hours));

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt(`What\'s your name?`);

if (name > 7) {
      console.log('Your name is long');
} else {
      console.log('Your name is short');
}

/* 11. Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
*/
let primoNome = prompt('What\'s your first name?');
let famigliaNome = prompt('What\'s your surname?');

if (primoNome.lenght > famigliaNome.lenght) {
      console.log('Your first name, ' + $("primoNome") + 'is longer than your family name, ' + $("famigliaName"))
} else {
      console.log('Your family name, ' + $("famigliaName") + 'is longer than your first name, ' + $("primoNome"))
}


/* 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.
*/

/* 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/

/* 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.
*/

/* 15. Create a human readable time format using the Date time object
      i. YYYY-MM-DD HH:mm
      ii. DD-MM-YYYY HH:mm
      iii. DD/MM/YYYY HH:mm
*/

// EXERCISES: Level 3
/* 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
      i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
