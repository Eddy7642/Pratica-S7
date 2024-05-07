// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    // Mostra il nome precedentemente salvato (se presente)
    const savedNameElement = document.getElementById('saved-name');
    const savedName = localStorage.getItem('name');
    if (savedName) {
        savedNameElement.textContent = 'Nome salvato: ' + savedName;
    } else {
        savedNameElement.textContent = 'Nessun nome salvato.';
    }
});

function saveName() {
    const nameInput = document.getElementById('name-input').value;
    localStorage.setItem('name', nameInput);
    updateSavedName();
}

function removeName() {
    localStorage.removeItem('name');
    updateSavedName();
}

function updateSavedName() {
    const savedNameElement = document.getElementById('saved-name');
    const savedName = localStorage.getItem('name');
    if (savedName) {
        savedNameElement.textContent = 'Nome salvato: ' + savedName;
    } else {
        savedNameElement.textContent = 'Nessun nome salvato.';
    }
}
