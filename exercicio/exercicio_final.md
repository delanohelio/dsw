## Exercício para a Final

### JavaScript - Programação Funcional

**Enunciado:**

Considerando o trecho de código abaixo em Javascript, que representa uma lista de produtos em um inventário, use programação funcional para implementar as quatro funções solicitadas. **É obrigatório o uso dos métodos `filter`, `map`, `forEach` e `reduce`**, cada um na sua respectiva função.

**Trecho de Código Inicial:**

```javascript
const inventario = [
  {
    id: 1,
    nome: 'Notebook Gamer',
    categoria: 'Eletrônicos',
    preco: 4599.99,
    emEstoque: true,
    quantidade: 15
  },
  {
    id: 2,
    nome: 'Cadeira de Escritório',
    categoria: 'Móveis',
    preco: 899.90,
    emEstoque: true,
    quantidade: 30
  },
  {
    id: 3,
    nome: 'Monitor 4K',
    categoria: 'Eletrônicos',
    preco: 1799.00,
    emEstoque: false,
    quantidade: 0
  },
  {
    id: 4,
    nome: 'Mesa de Jantar',
    categoria: 'Móveis',
    preco: 1299.00,
    emEstoque: true,
    quantidade: 10
  },
  {
    id: 5,
    nome: 'Teclado Mecânico',
    categoria: 'Eletrônicos',
    preco: 350.00,
    emEstoque: true,
    quantidade: 50
  }
];
```

-----

**Funções a serem implementadas:**

#### a) `encontrarEletronicosEmEstoque(produtos)`

* **Objetivo:** Usar o método **`filter`**.
* **Descrição:** A função deve receber a lista de produtos e retornar um **novo array** contendo apenas os produtos que pertencem à categoria "Eletrônicos" **E** que estão em estoque (`emEstoque: true`).

#### b) `gerarListaDeNomesEPrecos(produtos)`

* **Objetivo:** Usar o método **`map`**.
* **Descrição:** A função deve receber a lista de produtos e retornar um **novo array** de objetos, onde cada objeto contém apenas o `nome` e o `preco` do produto. O formato de cada objeto no novo array deve ser: `{ nome: 'Nome do Produto', preco: 99.99 }`.

#### c) `exibirResumoDoInventario(produtos)`

* **Objetivo:** Usar o método **`forEach`**.
* **Descrição:** A função deve receber a lista de produtos e, para cada produto, exibir uma mensagem formatada no console. A função **não deve ter retorno**. A mensagem deve seguir o formato: `Produto: [Nome do Produto] | Quantidade: [Quantidade]`.

#### d) `calcularValorTotalDoEstoque(produtos)`

* **Objetivo:** Usar o método **`reduce`**.
* **Descrição:** A função deve receber a lista de produtos e retornar um **único número** que representa o valor total de todos os itens em estoque. Para cada produto, o valor é calculado por `preco * quantidade`. O valor total é a soma dos valores de todos os produtos.

-----

**Bloco de código para preencher:**

```javascript
// a) Use a função filter para esta implementação
function encontrarEletronicosEmEstoque(produtos) {
  // Seu código aqui
}

// b) Use a função map para esta implementação
function gerarListaDeNomesEPrecos(produtos) {
  // Seu código aqui
}

// c) Use a função forEach para esta implementação
function exibirResumoDoInventario(produtos) {
  // Seu código aqui
}

// d) Use a função reduce para esta implementação
function calcularValorTotalDoEstoque(produtos) {
  // Seu código aqui
}


// Para testar suas funções (não precisa modificar esta parte)
console.log('--- Eletrônicos em Estoque ---');
console.log(encontrarEletronicosEmEstoque(inventario));

console.log('\n--- Lista de Nomes e Preços ---');
console.log(gerarListaDeNomesEPrecos(inventario));

console.log('\n--- Resumo do Inventário ---');
exibirResumoDoInventario(inventario);

console.log('\n--- Valor Total do Estoque ---');
const valorTotal = calcularValorTotalDoEstoque(inventario);
console.log(`R$ ${valorTotal.toFixed(2)}`);
```

---

Excelente. Criei uma questão prática que testa o conhecimento sobre manipulação do DOM em um cenário comum: criar e adicionar elementos a uma lista dinamicamente em resposta a um evento.

A questão está no formato de "completar o código", exigindo que o aluno conheça os métodos essenciais para selecionar, criar, modificar e adicionar elementos ao DOM.

-----

### JavaScript - DOM

**Enunciado:**

O trecho de código abaixo contém uma página HTML com uma lista de tarefas e um botão para adicionar novos itens. O script `app.js` está incompleto. Sua tarefa é preencher as lacunas (indicadas por `// Seu código aqui` e um comentário guia) com o método ou propriedade do DOM correto para que a funcionalidade seja implementada conforme o esperado.

**Objetivo do Script:**
Ao clicar no botão "Adicionar Tarefa", o script deve:

1.  Ler o texto do campo de input.
2.  Criar um novo elemento de lista `<li>`.
3.  Adicionar o texto do input ao novo `<li>`.
4.  Adicionar uma classe CSS `"task-item"` ao novo `<li>`.
5.  Adicionar o `<li>` à lista `<ul>` já existente na página.
6.  Limpar o campo de input para a próxima tarefa.

**Arquivo `index.html` (Fornecido):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>DOM - Lista de Tarefas</title>
    <style>
        body { font-family: sans-serif; }
        .container { max-width: 400px; margin: 20px auto; }
        .task-item { padding: 10px; background-color: #f0f0f0; border-bottom: 1px solid #ccc; }
        input { width: 70%; padding: 8px; }
        button { padding: 8px; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Minhas Tarefas</h2>
        <input type="text" id="task-input" placeholder="Digite uma nova tarefa">
        <button id="add-task-btn">Adicionar Tarefa</button>
        <ul id="task-list">
            <li class="task-item">Estudar JavaScript</li>
        </ul>
    </div>
    <script src="app.js"></script>
</body>
</html>
```

-----

**Arquivo `app.js` (Complete o código):**

```javascript
// 1. Selecione os elementos do DOM com os quais vamos interagir.
const botaoAdicionar = ???
const inputTarefa = ???
const listaDeTarefas = ???

// 2. Adicione um "escutador de eventos" para o clique no botão.
botaoAdicionar.????('click', function() {

  // 3. Obtenha o texto digitado pelo usuário no campo de input.
  const textoDaTarefa = ???;

  // Impede a criação de tarefas vazias.
  if (textoDaTarefa.trim() === '') {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  // 4. Crie um novo elemento de lista (<li>).
  ???
  // 5. Defina o conteúdo de texto do novo <li> como o texto da tarefa.
  ???
  // 6. Adicione a classe CSS "task-item" ao novo <li>.
  ???
  // 7. Adicione o novo <li> como um "filho" da lista <ul>.
  ???      

  // 8. Limpe o campo de input após adicionar a tarefa.
  inputTarefa.??? = '';

});

```

---

### VueJS (sem componentes)

**Enunciado:**

O trecho de código abaixo representa a estrutura de um "Calculador de Carrinho de Compras". Sua tarefa é completar o código nos arquivos `index.html` e `app.js` para implementar a funcionalidade completa usando Vue.js. As lacunas estão indicadas por comentários-guia.

**Objetivo da Aplicação:**

1.  Exibir a lista inicial de produtos.
2.  Permitir que o usuário altere a **quantidade** de cada produto usando os campos de input.
3.  Calcular e exibir o **subtotal** para cada item (preço × quantidade), que deve ser atualizado automaticamente quando a quantidade muda.
4.  Calcular e exibir o **Total Geral** do carrinho, que também deve ser atualizado automaticamente sempre que qualquer subtotal for alterado.
5.  Permitir a adição de um novo produto ao carrinho através do formulário.

**Arquivo `style.css` (Fornecido e Completo):**

```css
body { font-family: sans-serif; background-color: #f4f4f9; display: flex; justify-content: center; padding-top: 40px; }
.container { width: 100%; max-width: 600px; background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; }
h2 { text-align: center; padding: 20px 0; background-color: #42b883; color: white; border-radius: 8px 8px 0 0; margin: 0; }
.cart-item, .add-form { display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #eee; }
.item-name { flex: 3; }
.item-price, .item-subtotal { flex: 2; text-align: right; }
.item-qty { flex: 1; text-align: center; }
.item-qty input { width: 50px; text-align: center; padding: 5px; border: 1px solid #ccc; border-radius: 4px; }
.total-section { text-align: right; font-size: 1.5em; font-weight: bold; padding: 20px; background: #35495e; color: white; border-radius: 0 0 8px 8px; }
.add-form { background: #fafafa; }
.add-form input { margin-right: 10px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
.add-form button { padding: 8px 15px; background: #35495e; color: white; border: none; cursor: pointer; border-radius: 4px; }
```

-----

**Arquivo `index.html` (Complete o código com diretivas Vue):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Vue.js - Carrinho de Compras</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="app" class="container">
        <h2>🛒 Carrinho de Compras</h2>

        <div class="cart-item">
            <span class="item-name">Nome do Produto</span>

            <span class="item-qty"><input type="number" min="0"></span>

            <span class="item-price">R$ 0.00</span>
            
            <span class="item-subtotal">R$ 0.00</span>
        </div>
        
        <div class="add-form">
            <input type="text" placeholder="Nome do produto">
            <input type="number" placeholder="Preço">
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
      // Lista inicial de produtos no carrinho
      produtos: [
        { id: 1, nome: 'Monitor LED 24"', preco: 899.90, quantidade: 1 },
        { id: 2, nome: 'Mouse sem Fio', preco: 89.99, quantidade: 2 },
        { id: 3, nome: 'SSD 1TB', preco: 450.00, quantidade: 1 }
      ],
      // Objeto para vincular com os campos do formulário de novo produto
      novoProduto: {
        nome: '',
        preco: null
      }
    }
  },

  methods: {
    adicionarProduto() {
      // TODO: Implemente a lógica para adicionar um novo produto.
      // 1. Verifique se o nome e o preço foram preenchidos.
      // 2. Crie um novo objeto de produto (com id único e quantidade 1).
      // 3. Adicione este novo objeto ao array 'this.produtos'.
      // 4. Limpe os campos do formulário (this.novoProduto).
    }
  },

  computed: {
    // Propriedades computadas são ideais para cálculos que dependem de outros dados.
    totalCarrinho() {
      // TODO: Implemente a lógica para calcular o valor total do carrinho.
      // 1. Use o método 'reduce' no array 'this.produtos'.
      // 2. Para cada produto, o valor é (produto.preco * produto.quantidade).
      // 3. O 'reduce' deve somar os valores de todos os produtos.
      // 4. A função deve retornar o valor total.
      // Lembre-se: esta propriedade será recalculada automaticamente pelo Vue!
      
      return 0; // Substitua este valor
    }
  }

}).mount('#app');
```