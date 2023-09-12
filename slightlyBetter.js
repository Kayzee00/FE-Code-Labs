const createPlayer = (name, hp, mp, items) => {
  return{
    name,
    hp,
    mp,
    items,
  };
};

const hanSolo = createPlayer(
  "Han Solo",
  100,
  10,
  ['Blaster']
); // these are all just regular objects
hanSolo.hp = 150;
console.log(hanSolo);

const darthVader = createPlayer("Darth Vader", 200, 50, ["Saber"]); // these are all just regular objects
console.log(darthVader); 

// this way is still incorrect, because "player" is the object prototype. If we want to customize or add to a player, it can mess up other things that inherit from the object in general.//