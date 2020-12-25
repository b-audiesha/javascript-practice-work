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


