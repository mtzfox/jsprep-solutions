// Problem:
// Using the following expression, add three numbers together
// tripleAdd(10)(20)(30) 
// returns total of all 3 numbers added together`


//Long form solution
//TripleAdd() needs to contain functions for each number - _a curried function_.
//These can be anonymous functions contained within each other.
function tripleAdd(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3
    }
  }
}

console.log(tripleAdd(10)(20)(30))
// 60

//Alternate solution
//Simpler solution would be to  invoke expression with arrow functions
function tripleAdd2(num1) {
  return ((num2) => ((num3) => num1 + num2 + num3))
}

console.log(tripleAdd2(10)(20)(30))
// 60

export {tripleAdd, tripleAdd2}