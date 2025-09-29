// Array met Marvel-films
const marvel = ['spiderman', 'ironman', 'venom', 'avengers'];

// Arrow function die een nieuwe Marvel film toevoegt
let addMarvel = () => {
  // Voeg een nieuwe film toe aan de array
  marvel.push('thor');
};

// Roep de functie aan
addMarvel();

// Loop door de array met een for/of loop en toon alles in de console
for (const film of marvel) {
  console.log(film);
}