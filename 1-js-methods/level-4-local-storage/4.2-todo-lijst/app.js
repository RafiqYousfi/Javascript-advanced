console.log('🚀 Opdracht 4.2: Todo Lijst');

let taken = []; // Array van strings (geen objecten!)

function voegTaakToe() {
    const input = document.getElementById('nieuwe-taak');
    const taakTekst = input.value.trim();
    
    if (taakTekst === '') {
        alert('Voer een taak in!');
        return;
    }
    
    // Voeg taak toe aan array
    taken.push(taakTekst);
    
    // Sla taken op in localStorage
    localStorage.setItem('taken', JSON.stringify(taken));
    
    // Maak input leeg en update UI
    input.value = '';
    toonTaken();
}

function laadTaken() {
    // Haal taken op uit localStorage
    const opgeslagenTaken = localStorage.getItem('taken');
    
    if (opgeslagenTaken) {
        // Parse JSON naar array
        taken = JSON.parse(opgeslagenTaken);
    }
}

function toonTaken() {
    const container = document.getElementById('taken-lijst');
    
    if (taken.length === 0) {
        container.innerHTML = '<p>Geen taken toegevoegd.</p>';
    } else {
        // Genereer HTML voor alle taken
        const takenHTML = taken.map((taak, index) => `
            <div class="taak">
                <span>${taak}</span>
                <button onclick="verwijderTaak(${index})" class="btn btn-small">🗑️</button>
            </div>
        `).join('');
        
        container.innerHTML = takenHTML;
    }
    
    // Update teller
    document.getElementById('aantal-taken').textContent = taken.length;
}

function verwijderTaak(index) {
    // Verwijder taak op specifieke index
    taken.splice(index, 1);
    
    // Sla taken op en update UI
    localStorage.setItem('taken', JSON.stringify(taken));
    toonTaken();
}

function wisAlleTaken() {
    if (confirm('Weet je zeker dat je alle taken wilt wissen?')) {
        // Maak array leeg
        taken = [];
        
        // Verwijder uit localStorage
        localStorage.removeItem('taken');
        
        toonTaken();
    }
}

// Initialisatie bij pagina laden
document.addEventListener('DOMContentLoaded', () => {
    laadTaken();
    toonTaken();
});