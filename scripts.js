// My first attempt at understanding the process of functions.

var bonusFunction = function (a){
console.log("a inital status " + a);
a=(a+2)*3-4;
console.log("a final status " + a);
}
bonusFunction(5);

// My answer to the bonus question.  

var add = function (b){
  var b;
  b = b+6;
  console.log( 'add',b );
  return b;
}
add(2);

var multiply = function(b){
  var b;
  b = b*5;
  console.log( 'multiply', b );
  return b;
}
multiply(3);

var subtract = function(b){
  var b;
  b = b-3;
  console.log( 'subtract',b );
  return b;
}

subtract(2);

add(multiply(subtract(7)));
