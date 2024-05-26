function createFlashCard() {
    const pergunta = document.getElementById('pergunta').value;
    const resposta = document.getElementById('resposta').value;

    const dados = {
        pergunta: pergunta,
        resposta: resposta
    };

    fetch('http://localhost:8080/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
        credentials: 'include'
    })
    .then(response => response.text())
    .then(data => {
        console.log('Resposta do servidor:', data);
        // Aqui você pode lidar com a resposta do servidor, se necessário
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}