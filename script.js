document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Obtém os valores dos campos
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    
    const messageElement = document.getElementById('message');
    
    // Valida se o Campo B é maior que o Campo A
    if (campoB > campoA) {
        messageElement.textContent = 'O formulário é válido! Campo B é maior que Campo A.';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'O formulário é inválido. Campo B deve ser maior que Campo A.';
        messageElement.style.color = 'red';
    }
});
