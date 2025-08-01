## Prova Final
### Questão 1 - JavaScript - Programação Funcional (4 pontos)

**Enunciado:**

Considerando o trecho de código abaixo em Javascript, que representa uma lista de alunos de uma turma, use programação funcional para implementar as quatro funções solicitadas. **É obrigatório o uso dos métodos `filter`, `map`, `forEach` e `reduce`**, cada um na sua respectiva função.

**Trecho de Código Inicial:**

```javascript
const turma = [
  {
    nome: 'Ana Silva',
    nota: 8.5,
    curso: 'Análise e Desenvolvimento de Sistemas',
    ativo: true
  },
  {
    nome: 'Bruno Costa',
    nota: 5.0,
    curso: 'Análise e Desenvolvimento de Sistemas',
    ativo: true
  },
  {
    nome: 'Carla Dias',
    nota: 9.0,
    curso: 'Design Gráfico',
    ativo: true
  },
  {
    nome: 'Daniel Souza',
    nota: 6.5,
    curso: 'Análise e Desenvolvimento de Sistemas',
    ativo: false // Aluno inativo
  },
  {
    nome: 'Elisa Ferreira',
    nota: 10.0,
    curso: 'Análise e Desenvolvimento de Sistemas',
    ativo: true
  }
];
```

-----

**Funções a serem implementadas:**

#### a) `filtrarAlunosAprovados(alunos)`

* **Objetivo:** Usar o método **`filter`**.
* **Descrição:** A função deve receber a lista de alunos da turma e retornar um **novo array** contendo apenas os alunos que estão **ativos** (`ativo: true`) **E** que tiveram nota **maior ou igual a 7.0**.

#### b) `gerarListaDeNomesEStatus(alunos)`

* **Objetivo:** Usar o método **`map`**.
* **Descrição:** A função deve receber a lista de alunos e retornar um **novo array** de objetos. Cada objeto deve conter o `nome` do aluno e um novo campo `status`, que será "Aprovado" se a nota for maior ou igual a 7.0, ou "Reprovado" caso contrário. O formato de cada objeto no novo array deve ser: `{ nome: 'Nome do Aluno', status: 'Aprovado' }`.

#### c) `exibirBoletimDaTurma(alunos)`

* **Objetivo:** Usar o método **`forEach`**.
* **Descrição:** A função deve receber a lista de alunos e, para cada aluno, exibir uma mensagem formatada no console. A função **não deve ter retorno**. A mensagem deve seguir o formato: `Aluno(a): [Nome do Aluno] | Nota Final: [Nota]`.

#### d) `calcularMediaGeralDaTurma(alunos)`

* **Objetivo:** Usar o método **`reduce`**.
* **Descrição:** A função deve receber a lista de alunos e retornar um **único número** que representa a média geral das notas de **todos os alunos ativos**. Alunos inativos (`ativo: false`) não devem entrar no cálculo. O cálculo final é a soma das notas dos alunos ativos dividida pelo número de alunos ativos.

-----

**Bloco de código para preencher:**

```javascript
// a) Use a função filter para esta implementação
function filtrarAlunosAprovados(alunos) {
  // Seu código aqui
}

// b) Use a função map para esta implementação
function gerarListaDeNomesEStatus(alunos) {
  // Seu código aqui
}

// c) Use a função forEach para esta implementação
function exibirBoletimDaTurma(alunos) {
  // Seu código aqui
}

// d) Use a função reduce para esta implementação
function calcularMediaGeralDaTurma(alunos) {
  // Seu código aqui
}


// Para testar suas funções (não precisa modificar esta parte)
console.log('--- Alunos Aprovados e Ativos ---');
console.log(filtrarAlunosAprovados(turma));

console.log('\n--- Lista de Nomes e Status ---');
console.log(gerarListaDeNomesEStatus(turma));

console.log('\n--- Boletim da Turma ---');
exibirBoletimDaTurma(turma);

console.log('\n--- Média Geral da Turma (apenas ativos) ---');
const mediaGeral = calcularMediaGeralDaTurma(turma);
console.log(`Média: ${mediaGeral.toFixed(2)}`);
```

---

### Questão 2 - JavaScript - DOM (4 pontos)

**Enunciado:**

O trecho de código abaixo contém uma página HTML com uma seção de comentários e um formulário para enviar um novo comentário. O script `app.js` está incompleto. Sua tarefa é preencher as lacunas (indicadas por `???` e um comentário guia) com o método ou propriedade do DOM correto para que a funcionalidade seja implementada conforme o esperado.

**Objetivo do Script:**
Ao clicar no botão "Enviar Comentário", o script deve:

1.  Ler o nome e o comentário dos campos de input.
2.  Criar um novo elemento `<div>` para o contêiner do comentário.
3.  Criar os elementos internos para o autor (`<strong>`) e o texto do comentário (`<p>`).
4.  Adicionar o `<strong>` e o `<p>` dentro do `<div>` principal.
5.  Adicionar uma classe CSS `"comment-item"` ao novo `<div>`.
6.  Adicionar o `<div>` completo à seção de comentários já existente.
7.  Limpar os campos de input.

**Arquivo `index.html` (Fornecido):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>DOM - Seção de Comentários</title>
    <style>
        body { font-family: sans-serif; }
        .container { max-width: 500px; margin: 20px auto; }
        .comment-item { padding: 10px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; margin-bottom: 10px; }
        .comment-item strong { color: #0056b3; }
        .form-group { margin-bottom: 10px; }
        input, button { width: 100%; padding: 8px; box-sizing: border-box; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Comentários</h2>
        <div id="comments-section">
            <div class="comment-item">
                <strong>Maria:</strong>
                <p>Ótimo artigo, muito informativo!</p>
            </div>
        </div>
        <hr>
        <h3>Deixe seu comentário</h3>
        <div class="form-group">
            <input type="text" id="author-input" placeholder="Seu nome">
        </div>
        <div class="form-group">
            <input type="text" id="comment-input" placeholder="Seu comentário">
        </div>
        <button id="submit-btn">Enviar Comentário</button>
    </div>
    <script src="app.js"></script>
</body>
</html>
```

-----

**Arquivo `app.js` (Complete o código):**

```javascript
// 1. Selecione os elementos do DOM.
const botaoEnviar = document.???('submit-btn');
const inputAutor = document.???('author-input');
const inputComentario = document.???('comment-input');
const secaoDeComentarios = document.???('comments-section');

// 2. Adicione um escutador de evento de clique ao botão.
botaoEnviar.???('click', function() {

  // 3. Obtenha os valores dos campos de input.
  const autor = inputAutor.???;
  const comentario = inputComentario.???;

  // Impede o envio de comentários vazios.
  if (autor.trim() === '' || comentario.trim() === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // 4. Crie o elemento principal do comentário (<div>).
  const divComentario = document.???('div');

  // 5. Adicione a classe "comment-item" ao novo <div>.
  divComentario.???.add('comment-item');

  // 6. Crie os elementos para o autor (<strong>) e o texto (<p>).
  const autorStrong = document.???('strong');
  const comentarioP = document.????('p');

  // 7. Defina o conteúdo de texto dos novos elementos.
  autorStrong.??? = `${autor}:`;
  comentarioP.??? = comentario;

  // 8. Adicione o autor e o texto como "filhos" do <div> principal.
  divComentario.???(autorStrong);
  divComentario.???(comentarioP);

  // 9. Adicione o <div> completo à seção de comentários.
  secaoDeComentarios.???(divComentario);
  
  // 10. Limpe os campos de input.
  inputAutor.??? = '';
  inputComentario.??? = '';

});
```

---

### Questão 3 - VueJs sem componentes (4 pontos)

**Enunciado:**

O trecho de código abaixo representa a estrutura de um "Gerenciador de Orçamento Mensal". Sua tarefa é completar o código nos arquivos `index.html` e `app.js` para implementar a funcionalidade completa usando Vue.js. As lacunas estão indicadas por comentários-guia.

**Objetivo da Aplicação:**

1.  Exibir a lista inicial de despesas.
2.  Permitir que o usuário altere o **valor** de cada despesa diretamente na lista, usando os campos de input.
3.  Calcular e exibir o **Total de Despesas**, que deve ser atualizado automaticamente sempre que o valor de uma despesa for alterado.
4.  Permitir a adição de uma nova despesa ao orçamento através do formulário.

**Arquivo `style.css` (Fornecido e Completo):**

```css
body { font-family: sans-serif; background-color: #f4f7f6; display: flex; justify-content: center; padding-top: 40px; }
.container { width: 100%; max-width: 600px; background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-radius: 8px; }
h2 { text-align: center; padding: 20px 0; background-color: #00796b; color: white; border-radius: 8px 8px 0 0; margin: 0; }
.expense-item, .add-form { display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid #e0e0e0; }
.item-desc { flex-grow: 1; }
.item-value { text-align: right; }
.item-value input { width: 100px; text-align: right; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px; }
.total-section { text-align: right; font-size: 1.5em; font-weight: bold; padding: 20px; background: #333; color: white; border-radius: 0 0 8px 8px; }
.add-form { background: #fafafa; }
.add-form input { margin-right: 10px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
.add-form .desc-input { flex-grow: 1; }
.add-form button { padding: 8px 15px; background: #00796b; color: white; border: none; cursor: pointer; border-radius: 4px; }
```

-----

**Arquivo `index.html` (Complete o código com diretivas Vue):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Vue.js - Gerenciador de Orçamento</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="app" class="container">
        <h2>💰 Orçamento Mensal</h2>

        <div class="expense-item">
            <span class="item-desc">Descrição da Despesa</span>

            <div class="item-value">
                <span>R$ </span>
                <input type="number" min="0">
            </div>
        </div>
        
        <div class="add-form">
            <input type="text" class="desc-input" placeholder="Nova despesa">
            <input type="number" placeholder="Valor">
            <button>Adicionar</button>
        </div>

        <div class="total-section">
            Total: R$ 0.00
        </div>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script src="app.js"></script>
</body>
</html>
```

-----

**Arquivo `app.js` (Complete o código com a lógica Vue):**

```javascript
const { createApp } = Vue;

createApp({
  data() {
    return {
      // Lista inicial de despesas
      despesas: [
        { id: 1, descricao: 'Aluguel', valor: 1200.00 },
        { id: 2, descricao: 'Supermercado', valor: 650.50 },
        { id: 3, descricao: 'Internet', valor: 99.90 }
      ],
      // Objeto para vincular com os campos do formulário de nova despesa
      novaDespesa: {
        descricao: '',
        valor: null
      }
    }
  },

  methods: {
    adicionarDespesa() {
      // TODO: Implemente a lógica para adicionar uma nova despesa.
      // 1. Verifique se a descrição e o valor foram preenchidos.
      // 2. Crie um novo objeto de despesa (com id único).
      // 3. Adicione este novo objeto ao array 'this.despesas'.
      // 4. Limpe os campos do formulário (this.novaDespesa).
    }
  },

  computed: {
    // Propriedades computadas são reativas e ideais para cálculos.
    totalDespesas() {
      // TODO: Implemente a lógica para calcular o valor total das despesas.
      // 1. Use o método 'reduce' no array 'this.despesas'.
      // 2. Some o 'valor' de cada objeto de despesa.
      // 3. A função deve retornar o valor total.
      // O Vue garantirá que esta propriedade seja recalculada sempre que uma despesa mudar.
      
      return 0; // Substitua este valor
    }
  }

}).mount('#app');
```