document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(data); // Adiciona esta linha para verificar os dados no console

    fetch('https://script.google.com/macros/s/AKfycbyh4xrWE7pqrtqb5fmfJFnW6zQR0vNjw3XBx4N_F-DNkopXPg4eKXTDYx4-va7GhuiO/exec', {
        method: 'POST',
        body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.result === 'success') {
            alert('Dados enviados com sucesso!');
            event.target.reset(); // Limpa o formulário
        } else if (responseData.result === 'error' && responseData.message === 'Email already exists') {
            alert('Erro: O email já existe.');
        } else {
            alert('Erro ao enviar os dados.');
        }
    })
    .catch(error => console.error('Error:', error));
});