const player = { // this is more of a template for the player. //
  name: "?", 
  hp: 100, 
  mp: 0, 
  items: [],
};

const hanSolo = player; 
hanSolo.name = "Han Solo";
hanSolo.hp = 80;
hanSolo.mp = 20;
hanSolo.items = ["Blaster"];
const darthVader = player;

console.log(hanSolo);
console.log(darthVader); // code error: results in Darth Vader being the same as Han Solo. "Player" is an object. So when we modify Han Solo, we're actually changing our "template". When darthVader was assigned to "player", it's already been modified with the values for Han Solo - therefore, it won't work.