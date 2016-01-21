var temp = 90;
var precipitation = false;
var indoors = true;

console.log("The temperature is " + temp + " degrees.");

// if (temp > 80 && !precipitation) {
//   console.log("Time to swim!");
// } else if (indoors){
//   console.log("Time to swim!");
// }

if (indoors) {
  console.log("Time to swim!");
} else if (temp > 80 && !precipitation) {
  console.log("Time to swim!");
}
