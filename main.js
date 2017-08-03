/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  //function to change all strings into a number
  function changeStringToNumberButNotA(num) {
    if (num === "A") {
      return "A";
    } else if (typeof(num) === 'string') {
      return parseInt(num, 10);
    }
  }

  //function sum up all the numbers
  function sum(x, y) {
    return x + y;
  }

  for (let i = 0; i < hand.length; i++){
    //then change everything stringy to a number and sort...
    if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
      hand[i] = "10";
    }
  }

  let transformedHandArray = hand.map(changeStringToNumberButNotA);
  let totalHand = 0;
  transformedHandArray.sort();

  // totalHand = transformedHandArray.reduce(sum, 0);

  for (let i = 0; i < transformedHandArray.length; i++) {
    //trying to change the NaN slash A to the number 1 or 11....
    if (transformedHandArray[i] === "A") {
      if (totalHand <= 10) {
        totalHand += 11;
      } else {
        totalHand += 1;
      }
    } else {
      totalHand += transformedHandArray[i];
    }
  }

  return totalHand;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
