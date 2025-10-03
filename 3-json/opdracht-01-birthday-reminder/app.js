let output = document.querySelector('.output');

fetch('./birthday.json')
  .then((response) => response.json())
  .then((birthday) => {
    output.innerHTML = `<h2>${birthday.length} Birthdays Today</h2>`;
    
    for (let person of birthday) {
      output.innerHTML += `
        <div class="person">
          <img src="${person.image}" alt="${person.naam}">
          <div class="person-info">
            <h3>${person.naam}</h3>
            <p>${person.leeftijd} years</p>
          </div>
        </div>
      `;
    }

    output.innerHTML += `<button onclick="clearAll()" class="clear-btn">Clear All</button>`;
  });

  function clearAll(){
    output.innerHTML = ""
 
  }