const scenario = { murderer: 'Miss Scarlet',
room: 'Library',
weapon: 'Rope'
};
let declareMurderer = function() {
return `The murderer is ${scenario.murderer}.`;
}
let verdict = declareMurderer();
console.log(verdict);




// 1.) Here the constants variable used for  scenario object for key murderer and value
//   is Miss Scarlet and the variable declared with "let" block scope .
// the value for murderer remain same due to the the function called with let variable and the constant value is fixed
// the result is Miss Scarlet
//

const murderer = 'Professor Plum';
const changeMurderer = function() {

  murderer = 'Mrs. Peacock';
}
const declareMurderer = function() {

  return `The murderer is ${murderer}.`;
}
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

the murderer is Professor Plum because the constant value is fixed remains same
will not change.


 let murderer = 'Professor Plum';

 const declareMurderer = function() {
   let murderer = 'Mrs.Peacock';
   return `The murderer is ${murderer}.`;

 }
  const firstVerdict = declareMurderer();
  console.log('First Verdict:', firstVerdict);

  const secondVerdict = `The murderer is ${murderer}.`;
  console.log('Second Verdict:', secondVerdict);

  // The murderer value is in firstverdict = 'Professor Plum'
  // and the secondVerdict is also 'Professor Plum'
  // in declareMurderer function the variable is 'let' the

  let suspectOne = 'Miss Scarlet';
  let suspectTwo = 'Professor Plum';
  let suspectThree = 'Mrs. Peacock';
const declareAllSuspects = function() {
let suspectThree = 'Colonel Mustard';
return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}
const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

 //  The suspect three is Mrs.peacock instead  Colonel mustartd ,
 // In function declaredAllsuspects() is constant variable where
 // the value should not change remains same .
 //  after the loop the value suspect three is :'Mrs.peacock'

 const scenario = { murderer: 'Miss Scarlet', room: 'Kitchen',
weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
   scenario.weapon = newWeapon;
}
const declareWeapon = function() {
return `The weapon is the ${scenario.weapon}.`;
}
changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// the  new change Weapon  in changeWeapon   fun() is  'newWeapon'
// the newWeapon is alreday  changed in declareWeapon fun().
// the value will not change in changeWeapon fun() and the verdict should
//  remain same value as declareWeapon fun () value = newWeapon

let murderer = 'Colonel Mustard';
const changeMurderer = function() {
murderer = 'Mr. Green';
const plotTwist = function() {
   murderer = 'Mrs. White';
}
    plotTwist();
  }
const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Here the murderer is 'Colonel Mustartd'
 // can't change the mudrerer value  in declareMurderer fun()
 // the constant value is fixed

// Episode 7
let murderer = 'Professor Plum';
const changeMurderer = function() {
murderer = 'Mr. Green';
const plotTwist = function() {
let murderer = 'Colonel Mustard';
const unexpectedOutcome = function() {
   murderer = 'Miss Scarlet';
}
unexpectedOutcome(); }
    plotTwist();
  }
const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// error in function declaration, the function declared with in th another function  ,
// here the  murderer value is Professor plum

const scenario = { murderer: 'Mrs. Peacock', room: 'Conservatory', weapon: 'Lead Pipe'
};
const changeScenario = function() { scenario.murderer = 'Mrs. Peacock'; scenario.room = 'Dining Room';
const plotTwist = function(room) { if (scenario.room === room) {
scenario.murderer = 'Colonel Mustard'; }
const unexpectedOutcome = function(murderer) { if (scenario.murderer === murderer) {
scenario.weapon = 'Candle Stick'; }
}
unexpectedOutcome('Colonel Mustard'); }
plotTwist('Dining Room'); }
const declareWeapon = function() {
return `The weapon is ${scenario.weapon}.`
}
changeScenario();
const verdict = declareWeapon(); console.log(verdict);


// Episode 9
let murderer = 'Professor Plum';
if (murderer === 'Professor Plum') { let murderer = 'Mrs. Peacock';
}
const declareMurderer = function() {
  return `The murderer is ${murderer}.`; }
const verdict = declareMurderer(); console.log(verdict);
