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

//trying part 2 again!!//
function factsFunction() {
  let facts = ["I was born in Big Rapids, Michigan. ", "I graduated from Kendall College of Art and Design. ", "I can carry three full drinks in one hand. ", "I am not very comfortable with JavaScript at all, but I hope to improve in this afterhours bootcamp."];
  let text = "";
  let i;
  for (i = 0; i < facts.length; i++)
    text += facts[i];
    return text;
  }
  console.log(factsFunction());
////

// const interestingFacts1 = "I was born in Big Rapids, Michigan. ";
// const interestingFacst2 =
//   "I graduated from Kendall College of Art and Design. ";
// const interstingFacts3 = "I can carry three full drinks in one hand. ";
// const interestingFacts4 =
//   "I am not very comfortable with JavaScript at all, but I hope to improve in this afterhours bootcamp.";
// console.log(
//   interestingFacts1 + interestingFacst2 + interstingFacts3 + interestingFacts4
// );

//random number generator//

let counter = 0;
while (true){
  let randNumber = Math.floor(Math.random() * 11)
  if (randNumber === 5){
    console.log ("5===5 It took " + counter + " iterations to equal 5")
    break;
  }
  else {
    counter++
    console.log (randNumber + "!==5");
  }
}