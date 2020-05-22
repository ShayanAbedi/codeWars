// function cakes(recipe, available) {
//   // minimum can make
//   let minCake;
//   // iterate over ingredients in recipe
//   for (let ing in recipe) {
//     // check if the ingredient in in available
//     if (available[ing]) {
//       // if is, find remainder the division, dividing the available by the needed
//       const amountNeeded = recipe[ing];
//       const amountAva = available[ing];
//       const canHave = Math.floor(amountAva / amountNeeded);
//       // if it's less than minCake, override minCake
//       if (canHave < minCake || !minCake) {
//         minCake = canHave;
//       }
//     } else {
//       return 0;
//     }
//   }
//   return minCake;
// }

function cakes(recipe, available) {
  return Object.keys(recipe).reduce((numCakes, ingredient) => {
    if (numCakes && available[ingredient]) {
      const amountPerCake = recipe[ingredient];
      const amountAvailable = available[ingredient];
      const possibleNumCakes = Math.floor(amountAvailable / amountPerCake); // 🎂
      if (possibleNumCakes < numCakes) {
        numCakes = possibleNumCakes;
      }
      return numCakes;
    } else {
      return 0;
    }
  }, Infinity);
}

var recipe, available;
recipe = { flour: 500, sugar: 200, eggs: 1 };
available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available), 2);

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available), 0);
