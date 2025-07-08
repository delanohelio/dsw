## Exemplo de Mini E-Commerce

A aplicação simula um pequeno e-commerce:

1.  **Página de Produtos (`index.html`):** Mostra uma lista de produtos.
    * Ao clicar em "Ver Detalhes", usamos a **Técnica 1 (Parâmetros de URL)** para ir a uma página de detalhes do produto.
    * Ao clicar em "Adicionar ao Carrinho", usamos a **Técnica 2 (`sessionStorage`)** para salvar o item.
2.  **Página de Detalhes (`detalhes.html`):** Carrega os detalhes de um único produto com base no ID recebido pela URL.
3.  **Página do Carrinho (`carrinho.html`):** Carrega e exibe os itens que foram salvos na `sessionStorage`.

Também implementei o tratamento de erro conforme solicitado, verificando `response.ok` sem lançar exceções.

-----

### Estrutura dos Arquivos

Crie uma pasta para o projeto com a seguinte estrutura:

```
mini_app_multipage/
├── index.html
├── detalhes.html
├── carrinho.html
├── style.css
└── js/
    ├── index.js
    ├── detalhes.js
    └── carrinho.js
```

### Código dos Arquivos

#### **`index.html`** (Página de Produtos)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Nossa Lojinha</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="app" class="container">
    <header>
        <h1>Nossos Produtos</h1>
        <a href="carrinho.html">Ver Carrinho ({{ carrinho.length }})</a>
    </header>

    <div v-if="isLoading">Carregando produtos...</div>
    <div v-if="erro" class="erro">{{ erro }}</div>

    <div class="product-grid" v-if="!isLoading && !erro">
        <div class="product-card" v-for="produto in produtos" :key="produto.id">
            <h3>{{ produto.nome }}</h3>
            <p>Preço: R$ {{ produto.preco.toFixed(2) }}</p>
            <div class="card-actions">
                <a :href="'detalhes.html?id=' + produto.id">Ver Detalhes</a>
                <button @click="adicionarAoCarrinho(produto)">Adicionar ao Carrinho</button>
            </div>
        </div>
    </div>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script src="js/index.js"></script>
</body>
</html>
```

#### **`detalhes.html`** (Página de Detalhes do Produto)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Detalhes do Produto</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="app" class="container">
    <header>
        <a href="index.html">← Voltar para a lista</a>
    </header>

    <div v-if="isLoading">Carregando detalhes...</div>
    <div v-if="erro" class="erro">{{ erro }}</div>

    <div class="product-details" v-if="produto && !isLoading">
        <h1>{{ produto.nome }}</h1>
        <p class="price">R$ {{ produto.preco.toFixed(2) }}</p>
        <p>{{ produto.descricao }}</p>
    </div>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script src="js/detalhes.js"></script>
</body>
</html>
```

#### **`carrinho.html`** (Página do Carrinho)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Carrinho de Compras</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="app" class="container">
    <header>
        <a href="index.html">← Continuar Comprando</a>
    </header>

    <h1>Meu Carrinho</h1>

    <div v-if="carrinho.length > 0">
        <div class="cart-item" v-for="(item, index) in carrinho" :key="index">
            <span>{{ item.nome }}</span>
            <span>R$ {{ item.preco.toFixed(2) }}</span>
        </div>
        <hr>
        <div class="cart-total">
            <strong>Total: R$ {{ totalCarrinho.toFixed(2) }}</strong>
        </div>
    </div>
    <div v-else>
        <p>Seu carrinho está vazio.</p>
    </div>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script src="js/carrinho.js"></script>
</body>
</html>
```

#### **`style.css`** (Estilos para todas as páginas)

```css
body { font-family: sans-serif; background: #f0f2f5; color: #333; }
.container { max-width: 800px; margin: 20px auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
.erro { color: red; font-weight: bold; text-align: center; }
.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
.product-card { border: 1px solid #ddd; padding: 15px; border-radius: 5px; text-align: center; }
.card-actions { margin-top: 10px; display: flex; flex-direction: column; gap: 5px; }
a { color: #007bff; text-decoration: none; }
button, .card-actions a { display: block; width: 100%; text-align: center; padding: 8px; border-radius: 4px; border: 1px solid #007bff; background: #007bff; color: white; cursor: pointer; }
.card-actions a { background: white; color: #007bff; }
.product-details .price { font-size: 1.5em; font-weight: bold; color: #28a745; }
.cart-item, .cart-total { display: flex; justify-content: space-between; padding: 10px 0; }
.cart-total { font-size: 1.2em; }
```

#### **`js/index.js`**

```javascript
const API_URL = 'http://localhost:3000';
const { createApp } = Vue;

createApp({
    data() {
        return {
            produtos: [],
            carrinho: [],
            isLoading: false,
            erro: null
        }
    },
    methods: {
        async carregarProdutos() {
            this.isLoading = true;
            this.erro = null;
            const response = await fetch(`${API_URL}/produtos`);

            // Tratamento de erro sem lançar exceção
            if (response.ok) {
                this.produtos = await response.json();
            } else {
                this.erro = 'Não foi possível carregar os produtos. Verifique se o json-server está rodando.';
            }
            this.isLoading = false;
        },
        adicionarAoCarrinho(produto) {
            // TÉCNICA 2: Salva o produto no sessionStorage
            const carrinhoAtual = JSON.parse(sessionStorage.getItem('carrinho') || '[]');
            carrinhoAtual.push(produto);
            sessionStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));

            // Atualiza o contador local
            this.carrinho = carrinhoAtual;
            alert(`${produto.nome} foi adicionado ao carrinho!`);
        }
    },
    mounted() {
        this.carregarProdutos();
        // Atualiza o contador do carrinho ao carregar a página
        this.carrinho = JSON.parse(sessionStorage.getItem('carrinho') || '[]');
    }
}).mount('#app');
```

#### **`js/detalhes.js`**

```javascript
const API_URL = 'http://localhost:3000';
const { createApp } = Vue;

createApp({
    data() {
        return {
            produto: null,
            isLoading: false,
            erro: null
        }
    },
    methods: {
        async buscarProduto(id) {
            this.isLoading = true;
            this.erro = null;
            const response = await fetch(`${API_URL}/produtos/${id}`);

            if (response.ok) {
                this.produto = await response.json();
            } else {
                this.erro = `Produto com ID ${id} não encontrado.`;
            }
            this.isLoading = false;
        }
    },
    mounted() {
        // TÉCNICA 1: Lê o ID da URL
        const urlParams = new URLSearchParams(window.location.search);
        const produtoId = urlParams.get('id');
        if (produtoId) {
            this.buscarProduto(produtoId);
        } else {
            this.erro = 'Nenhum ID de produto foi fornecido.';
        }
    }
}).mount('#app');
```

#### **`js/carrinho.js`**

```javascript
const { createApp } = Vue;

createApp({
    data() {
        return {
            carrinho: []
        }
    },
    computed: {
        totalCarrinho() {
            // Calcula o total dos preços dos itens no carrinho
            return this.carrinho.reduce((total, item) => total + item.preco, 0);
        }
    },
    created() {
        // TÉCNICA 2: Lê os dados do carrinho do sessionStorage
        const carrinhoSalvo = sessionStorage.getItem('carrinho');
        if (carrinhoSalvo) {
            this.carrinho = JSON.parse(carrinhoSalvo);
        }
    }
}).mount('#app');
```

---

#### Json-server

#### **`db.json`**

```json
{
  "produtos": [
    {
      "id": 1,
      "nome": "Livro Vue.js",
      "preco": 59.90,
      "descricao": "Aprenda o framework progressivo de forma clara e objetiva."
    },
    {
      "id": 2,
      "nome": "Caneca Dev",
      "preco": 25.00,
      "descricao": "Uma caneca de porcelana de alta qualidade para seus momentos de código e café."
    },
    {
      "id": 3,
      "nome": "Mouse Ergonômico",
      "preco": 120.50,
      "descricao": "Evite dores e programe com mais conforto com este mouse vertical."
    }
  ]
}
```

---

### Como Executar

1.  Salve todos os arquivos na estrutura de pastas correta.
2.  Abra o arquivo `index.html` em seu navegador.
3.  Navegue pela aplicação para ver as duas técnicas em ação.