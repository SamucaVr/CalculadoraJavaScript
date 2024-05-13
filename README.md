## Descrição do Projeto: Calculadora Simples em JavaScript

Este projeto implementa uma calculadora simples utilizando JavaScript para a lógica de operações, HTML para a estrutura da interface do usuário e CSS para o estilo visual.

### Funcionalidades Principais:

1. **Adicionar ao Display:**
   - Permite ao usuário adicionar números e operadores ao display da calculadora clicando nos botões correspondentes.

2. **Limpar o Display:**
   - Possibilita limpar o display da calculadora, reiniciando a entrada atual.

3. **Calcular Resultado:**
   - Avalia a expressão matemática presente no display e exibe o resultado.
   - Gerencia erros de expressões inválidas ou operações não seguras.

### Funcionamento Interno:

- **Função `adicionarAoDisplay(valor)`:**
  - Concatena o valor (número ou operador) ao conteúdo atual do display.
  - Atualiza o display após cada interação.

- **Função `limparDisplay()`:**
  - Reseta o conteúdo do display para vazio.
  - Atualiza o display para refletir o estado vazio.

- **Função `calcularResultado()`:**
  - Avalia a expressão presente no display utilizando `eval()`.
  - Exibe o resultado no display após calcular.
  - Trata erros como expressões inválidas ou cálculos problemáticos.

- **Validação de Expressões:**
  - Verifica se a expressão contém apenas caracteres válidos (números, operadores básicos e espaços).

### Tecnologias Utilizadas:

- Linguagens:
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

- Frameworks/Bibliotecas: Nenhuma (implementação pura em JavaScript)
- IDE/Editor: ![Vscode](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Instruções de Uso:

1. Clone o repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador web.
3. Utilize os botões da calculadora para inserir números e realizar operações matemáticas básicas.
4. Clique no botão de igual (`=`) para obter o resultado da expressão inserida.

Este projeto foi desenvolvido como uma introdução ao desenvolvimento web utilizando JavaScript, HTML e CSS. É uma aplicação interativa que demonstra os princípios básicos de manipulação do DOM (Document Object Model) e lógica de programação para uma calculadora funcional em um ambiente web.
