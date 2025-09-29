
const berkan = {
    naam: 'Lucas',
    leeftijd: '17',
    geboortedatum: '10 december',
    geslacht: 'man',
    status: 'weet ik niet zeker',
    hobbys: ["lezen", "tekenen", "phonk luisteren", "sigma zijn"],
    changeName: function(name) {
       this.naam = name
    },
    changeName: function(staatus) {
       this.status = staatus
    },
    addHobby: function(hobby) {
    this.hobbys.push(hobby);
}
 
 
}
berkan.addHobby('lopen')
berkan.changeName('rafiq')
berkan.changeName('levend')
 
let output = document.querySelector('.output');
 
output.innerHTML = `
  <h1>leeftijd van Lukasz is ${berkan.naam}</h1>
   <p>leeftijd: ${berkan.leeftijd}</p>
  <p>geboortedatum: ${berkan.geboortedatum}</p>
  <p>Geslacht: ${berkan.geslacht}</p>
   <p>status: ${berkan.status}</p>
    <p>hobby's: ${berkan.hobbys}</p>
`;
 
 