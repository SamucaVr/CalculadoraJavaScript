let valorDisplay = '';

function adicionarAoDisplay(valor) {
    valorDisplay += valor;
    document.getElementById('display').value = valorDisplay;
}

function limparDisplay() {
    valorDisplay = '';
    document.getElementById('display').value = valorDisplay;
}

function calcularResultado() {
    let resultado = eval(valorDisplay);
    document.getElementById('display').value = resultado;
    valorDisplay = resultado.toString();
}