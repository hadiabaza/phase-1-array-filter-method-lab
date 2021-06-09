// Code your solution here
function findMatching(array, person) {
  return array.filter((name) => name.toLowerCase() === person.toLowerCase());
  //return array.find((name) => name.toLowerCase() === person.toLowerCase());
}
//return array.find((name) => name === person);
// HOW DO WE MAKE A COMMON DENOMINATOR?
//TEST CASE SAYS CASE DOESN'T HAVE TO MATCH BUT LETTERS DO
//TO CHECK IF PERSON === NAME:
// TOLOWERCASE() OR TOUPPERCASE()

function fuzzyMatch(array, src) {}

function matchName(source, name) {
  return array.filter((record) => record.name === name);
}
