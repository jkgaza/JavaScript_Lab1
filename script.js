const name = "Jordan Gaza";
const city = "Grand Rapids, Michigan";
function greeting(a) {
  if (city == "Detroit, Michigan") {
    return "Hello, my name is " + name + " and I am a student at Grand Circus in Detroit, Michigan.";
  } else {
    return "Hello, my name is " + name + " and I am a student at Grand Circus in Grand Rapids, Michigan.";
  }
}
console.log(greeting(city));



const age = 26;
const birthday = "December 2nd";
console.log(
  "I am " + age + " years old and my birthday is on " + birthday
);


const interestingFacts1 = "I was born in Big Rapids, Michigan. ";
const interestingFacst2 = "I graduated from Kendall College of Art and Design. ";
const interstingFacts3 = "I can carry three full drinks in one hand. ";
const interestingFacts4 = "I am not very comfortable with JavaScript at all, but I hope to improve in this afterhours bootcamp.";
console.log (
    interestingFacts1 + interestingFacst2 + interstingFacts3 + interestingFacts4
);


console.log(
  Math.floor(Math.random() * 11))