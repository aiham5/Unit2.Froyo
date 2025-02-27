let vistorAlert = prompt(
  "Please type your Ice Cream Flavors with Commas in between"
);
if (vistorAlert !== null && vistorAlert.trim() !== "") {
  let flavors = vistorAlert.split(",").map((flavor) => flavor.trim());

  let flavorCounts = {};

  flavors.forEach((flavor) => {
    if (flavorCounts[flavor]) {
      flavorCounts[flavor] += 1; // If flavor exists, increment the count
    } else {
      flavorCounts[flavor] = 1; // Otherwise, set the count to 1
    }
  });

  console.table(flavorCounts);
}

alert("Check Console");
