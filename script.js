const name = "Jordan Gaza";
const detroitGC = false;
const age = 26;
const birthday = "December 2nd";
function greeting() {
  if (detroitGC == true) {
    return (
      "Hello, my name is " +
      name +
      " and I am a student at Grand Circus in Detroit, Michigan. I am " +
      age +
      " years old and my birthday is on " +
      birthday
    );
  } else {
    return (
      "Hello, my name is " +
      name +
      " and I am a student at Grand Circus in Grand Rapids, Michigan. I am " +
      age +
      " years old and my birthday is on " +
      birthday
    );
  }
}
console.log(greeting());

////

const interestingFacts1 = "I was born in Big Rapids, Michigan. ";
const interestingFacst2 =
  "I graduated from Kendall College of Art and Design. ";
const interstingFacts3 = "I can carry three full drinks in one hand. ";
const interestingFacts4 =
  "I am not very comfortable with JavaScript at all, but I hope to improve in this afterhours bootcamp.";
console.log(
  interestingFacts1 + interestingFacst2 + interstingFacts3 + interestingFacts4
);

//working on random number if else//
const randomNumber = "";
function random () {
  if (randomNumber == 5){
    return (
      randomNumber + "===5"
    );
  } else {
    return (
     randomNumber + "!==5"
    );
  }
}

//For loop list//

// var text = "";
// var i = "";
// for (i = 0; i < 5; i++) {
//   text += "The number is " + i;
// }
// console.log(
//   "The number is " + i
// );


//random number generator//

let counter = 0;
while (true){
  let randNumber = Math.floor(Math.random() * 11)
  if (randNumber === 5){
    console.log ("It took " + counter + " iterations to equal 5")
    break;
  }
  else {
    counter++
    console.log (randNumber + "!==5");
  }
}