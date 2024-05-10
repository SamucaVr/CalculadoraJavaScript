let valorDisplay = '';

function adicionarAoDisplay(valor) {
    valorDisplay += valor;
    atualizarDisplay();
}

function limparDisplay() {
    valorDisplay = '';
    atualizarDisplay();
}

function calcularResultado() {
    if (valorDisplay === '') {
        document.getElementById('display').value = 'Zerado';
        return;
    }

    try {
        let resultado = evaluateExpression(valorDisplay);
        document.getElementById('display').value = resultado;
        valorDisplay = resultado.toString();
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        console.error('Erro ao calcular resultado:', error);
    }
}

function evaluateExpression(expression) {
    if (!isSafeExpression(expression)) {
        throw new Error('Expressão inválida');
    }

    return eval(expression);
}

function isSafeExpression(expression) {
    return /^[0-9+\-*/().\s]+$/.test(expression);
}

function atualizarDisplay() {
    document.getElementById('display').value = valorDisplay;
}
