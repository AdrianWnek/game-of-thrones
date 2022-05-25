// Jon's stats
let jonSnowAttack = 25;
let jonSnowHealth = 100;
let jonSnwoDefense = 0;

//Jamie's stats
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
  console.log("Jon Snow has better attack than Jamie Lennister");
} else if (jonSnowAttack < jamieLannisterAttack) {
  console.log("Jamie Lennister has better attack than Jon Snow");
} else {
  console.log("Jon Snow and Jamie Lannister have the same attack");
}

if (jonSnowHealth <= jamieLannisterAttack) {
  console.log("Jon Snow has been slain");
} else {
  //jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
  jonSnowHealth -= jamieLannisterAttack;
  CONSOLE.LOG(`Jon Snow's health is down to ${jonSnowHealth}`);
}


// Jon pick's up a shield
jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnwoDefense) {
  console.log("Jon Snow has been slain");
} else {
  health -= (jamieLannisterAttack - defense);
  console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}

// Peasant throws Jon a health kit of 50: heal up!
const healthKit = 50;

if ((jonSnowHealth + healthKit) >= 100) {
  jonSnowHealth = 100;
} else {
  jonSnowHealth += healthKit;
}