<!--You are counting points for a basketball game, given the amount of 3-pointers scored and 2-pointers scored, find the final points for the team and return that value.-->
function points(twoPointers, threePointers) {
  return (twoPointers * 2) + (threePointers * 3)
}

/*convert seconds to minutes*/
function convert(minutes) {
  return minutes * 60;
}
/*
function firstOne(a, b = 0 c = 0, d = 0) {
  if (a)
    return a;
  else if (b)
    return b;
  else if (c)
    return c;
  else if (d)
    return d;
  else
    return "not found";
}
*/
/*is equal to */

const firstOne = (a,b,c,d) => a||b||c||d||"not found";

/*hours to seconds */

function howManySeconds(hours) {
  return hours * 3600;
}
/*or*/

function howManySeconds(hours) {
  const mins = 60;
  const seconds = 60;
  return hours * mins * seconds
}

/*find area of triangle*/

function triArea(b, h) {
  return (b * h) / 2
}

/*Write a function that returns the string "something" joined with a space " " and the given argument a.*/
function giveMeSomething(a) {
  return "something "+ a;
}

/*square a number*/

function squared(b) {
  return b*b;
}

/*or */

function squared(b) {
  return b*b;
}
/*Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/
function addition(num) {
  return num + 1;
}

/*
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

  chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
*/

function animals(chickens, cows, pigs) {
  return (chickens * 2) + (cows * 4) +(pigs * 4)
}

/*Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

Can you help her?*/

function greeting(name){
  if(name == "Mubashir") {
    return "Hello, my Love!";
  }
  return "Hello, " + name + "!";

}
/*There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.*/
const remainder = (x, y) => x % y
/*or*/
function remainder(x, y) {
  return x % y
}
/*
Create a function that takes length and width and finds the perimeter of a rectangle.*/
function findPerimeter(length, width) {
  return (2 *length) + (2 * width);
}
