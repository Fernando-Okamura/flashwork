document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:8080/all')
        .then(response => response.json())
        .then(data => {
            const flashcardsList = document.getElementById('flashcardsList');

            data.forEach(flashcard => {
                const listItem = document.createElement('li');
                listItem.textContent = `${flashcard.pergunta}: ${flashcard.resposta}`;
                flashcardsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro:', error));
});