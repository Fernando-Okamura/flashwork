function buscarFlashCard() {
    var flashCardId = document.getElementById('flashCardId').value;

    if (isNaN(flashCardId) || flashCardId <= 0) {
        alert("ID inválido. Insira um número positivo.");
    } else {
        // Redireciona para a página com o ID na URL.
        window.location.href = "getFlashCardById.html?id=" + flashCardId;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Obtém o ID da URL
    var urlParams = new URLSearchParams(window.location.search);
    var flashCardId = urlParams.get('id');

    // Se houver um ID, você pode usá-lo como necessário.
    if (flashCardId) {
        fetch('http://localhost:8080/' + flashCardId)
            .then(response => response.json())
            .then(data => {
                const flashcardDetails = document.getElementById('flashcardDetails');
                flashcardDetails.innerHTML = `<p>ID: ${data.id}, Pergunta: ${data.pergunta}, Resposta: ${data.resposta}</p>`;
            })
            .catch(error => {
                const flashcardDetails = document.getElementById('flashcardDetails');
                flashcardDetails.innerHTML = "<p>Flashcard não encontrado.</p>";
            });
    }
});