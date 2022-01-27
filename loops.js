// LOOPING THROUGH AN ARRAY
const vacationSpots = ['Bali', 'Paris', 'Tulum'];


for(let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}


// NESTED LOOP
let bobsFollowers = ['Linda', 'Gene', 'Louise', 'Tina'];
let tinasFollowers = ['Bob', 'Gene', 'Linda'];
let mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++) {
  for(let m = 0; m < tinasFollowers.length; m++) {
    if(bobsFollowers[i] === tinasFollowers[m]) {
      console.log(mutualFollowers.push(bobsFollowers[i]));
    }
  }
}


//WHILE LOOP
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard != 'spade'){
currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard);
}


// DO...WHILE LOOPS
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded);





// BREAK KEYWORD
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];


for (let i = 0; i < rapperArray.length; i++){
console.log(rapperArray[i]);
if(rapperArray[i] === 'Notorious B.I.G.') {
  break;
}
}
console.log("And if you don't know, now you know.");

