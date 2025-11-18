let container = document.getElementById("container")

fetch(`https://fortnite-api.com/v2/cosmetics/new`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.data.items.br);

        for (let character of data.data.items.br) {
            console.log(character.name);

                container.innerHTML += `
                <h2>${character.name}</h2>
                <p>${character.description}</p>
                <img src=${character.images.icon} alt=${character.name}>
                `;

        }




    });