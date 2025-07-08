## Aula: Criando uma Aplicação com Múltiplas Páginas e Compartilhando Dados

Até agora, nossos miniapps funcionavam em uma única página. No entanto, o projeto final exige uma estrutura com diferentes áreas (Inicial, Admin, Rastreamento). Isso nos traz dois desafios:

1.  Como navegar entre diferentes arquivos HTML?
2.  Como passar informações de uma página para a outra?

Vamos explorar duas técnicas simples e poderosas para resolver isso.

### 1\. Navegação Simples com Links (`<a>`)

A forma mais fundamental de criar uma aplicação com múltiplas páginas é usando múltiplos arquivos `.html` e navegando entre eles com a tag `<a>`.

**Exemplo (`index.html`):**

```html
<nav>
    <a href="/admin.html">Acessar Área Administrativa</a>
    <a href="/rastreamento.html">Rastrear Encomenda</a>
</nav>
```

### 2\. Passando Dados entre Páginas

#### **Técnica 1: Parâmetros de URL (Query Strings)**

Esta é a melhor abordagem para passar informações simples e não sensíveis, como um ID de produto, um código de rastreamento ou um termo de busca.

**Como funciona:**
Você adiciona os dados diretamente na URL após um `?`, no formato `chave=valor`.

**Caso de Uso:** Imagine uma lista de entregas na página `admin.html`. O usuário clica em uma delas para ver os detalhes em uma nova página, `detalhes_entrega.html`.

**Passo 1: Enviando o dado (na página de origem)**

Na sua lista `v-for`, o link para os detalhes seria construído dinamicamente, incluindo o ID da entrega na URL.

**HTML (`admin.html`):**

```html
<ul>
  <li v-for="entrega in entregas" :key="entrega.id">
    <span>Código: {{ entrega.codigo }}</span>
    <a :href="'/detalhes_entrega.html?id=' + entrega.id">
      Ver Detalhes
    </a>
  </li>
</ul>
```

Se o ID da entrega for `123`, o link gerado será `/detalhes_entrega.html?id=123`.

**Passo 2: Recebendo o dado (na página de destino)**

Na página `detalhes_entrega.html`, usamos JavaScript para ler o parâmetro `id` da URL. A forma moderna de fazer isso é com o objeto `URLSearchParams`.

**JavaScript (`detalhes_entrega.js`):**

```javascript
createApp({
    data() {
        return {
            detalhesEntrega: null,
            isLoading: true
        }
    },
    mounted() {
        // 1. Pega os parâmetros da URL atual
        const urlParams = new URLSearchParams(window.location.search);

        // 2. Extrai o valor do parâmetro 'id'
        const entregaId = urlParams.get('id');

        // 3. Usa o ID para buscar os detalhes na API
        if (entregaId) {
            this.buscarDetalhes(entregaId);
        }
    },
    methods: {
        async buscarDetalhes(id) {
            this.isLoading = true;
            const response = await fetch(`http://api.exemplo.com/entregas/${id}`);
            this.detalhesEntrega = await response.json();
            this.isLoading = false;
        }
    }
}).mount('#app');
```

-----

### **Técnica 2: Compartilhando Dados com Armazenamento Web (Web Storage)**

Esta técnica é ideal para dados que precisam ser mantidos durante a navegação do usuário ou para passar objetos mais complexos que seriam inadequados para uma URL.

Existem duas APIs para isso:

* **`localStorage`**: Os dados persistem indefinidamente, mesmo se o navegador for fechado. Ótimo para "Lembrar de mim" ou preferências de tema (claro/escuro).
* **`sessionStorage`**: Os dados são **limpos automaticamente** assim que a aba do navegador é fechada. Perfeito para dados temporários de uma sessão, como o conteúdo de um carrinho de compras ou informações de um formulário de várias etapas.

#### **Como Salvar Objetos na `sessionStorage` com Vue.js**

O Web Storage (tanto `session` quanto `local`) só armazena dados no formato de **string**. Para salvar objetos ou arrays, você **precisa** convertê-los para uma string JSON e depois convertê-los de volta para um objeto ao lê-los.

**Caso de Uso:** Um carrinho de compras. O usuário adiciona itens em uma página e finaliza a compra em outra. Os dados do carrinho precisam ser mantidos entre essas duas páginas.

**Passo 1: Modelando os dados no Vue**

No seu `data()`, você teria o estado do carrinho.

```javascript
data() {
  return {
    // Array para guardar os itens do carrinho
    carrinho: [] 
  }
}
```

**Passo 2: Criando um método para adicionar itens e salvar na `sessionStorage`**

Este método adiciona um produto ao array `carrinho` e, em seguida, salva o array inteiro na `sessionStorage`.

```javascript
methods: {
  adicionarAoCarrinho(produto) {
    // Adiciona o produto ao array local
    this.carrinho.push(produto);
    
    // Salva o estado atualizado do carrinho na sessionStorage
    this.salvarCarrinhoNaSessao();
  },
  
  salvarCarrinhoNaSessao() {
    // Converte o array de objetos para uma string JSON e salva
    sessionStorage.setItem('carrinhoDeCompras', JSON.stringify(this.carrinho));
    console.log('Carrinho salvo na sessão!');
  }
}
```

**Passo 3: Carregando os dados da `sessionStorage` ao iniciar a aplicação**

Quando o usuário navega para outra página (ou atualiza a página atual), precisamos verificar se já existe um carrinho salvo na sessão. O hook `created()` ou `mounted()` é perfeito para isso.

```javascript
created() {
  // Lê a string que foi salva na sessão
  const carrinhoSalvo = sessionStorage.getItem('carrinhoDeCompras');
  
  // Se existir algo salvo...
  if (carrinhoSalvo) {
    // ...converte a string de volta para um objeto/array e atualiza o estado
    this.carrinho = JSON.parse(carrinhoSalvo);
    console.log('Carrinho carregado da sessão!');
  }
}
```

**Exemplo Completo:**

**JavaScript (`app.js`):**

```javascript
const { createApp } = Vue;

createApp({
  data() {
    return {
      carrinho: []
    }
  },
  methods: {
    adicionarAoCarrinho(produto) {
      this.carrinho.push(produto);
      sessionStorage.setItem('carrinhoDeCompras', JSON.stringify(this.carrinho));
      alert(`'${produto.nome}' adicionado ao carrinho!`);
    }
  },
  created() {
    const carrinhoSalvo = sessionStorage.getItem('carrinhoDeCompras');
    if (carrinhoSalvo) {
      this.carrinho = JSON.parse(carrinhoSalvo);
    }
  }
}).mount('#app');
```

**HTML (`index.html`):**

```html
<div id="app">
  <h2>Produtos</h2>
  <button @click="adicionarAoCarrinho({id: 1, nome: 'Livro Vue.js', preco: 50})">Adicionar Livro (R$50)</button>
  <button @click="adicionarAoCarrinho({id: 2, nome: 'Caneca Dev', preco: 25})">Adicionar Caneca (R$25)</button>
  
  <hr>
  
  <h2>Itens no Carrinho: {{ carrinho.length }}</h2>
  <ul>
    <li v-for="item in carrinho" :key="item.id">
      {{ item.nome }} - R$ {{ item.preco }}
    </li>
  </ul>
  <p>
    <a href="/checkout.html">Ir para o Checkout</a>
  </p>
</div>
```

Agora, se você adicionar itens e navegar para a página `checkout.html` (que teria uma lógica similar no `created()` para carregar os dados), o carrinho permanecerá intacto. Se fechar a aba e abrir de novo, ele estará vazio.

### Resumo: Quando Usar Cada Técnica?

| Critério | Parâmetros de URL | Web Storage (`localStorage`) |
| :--- | :--- | :--- |
| **Ideal para** | Passar IDs, códigos, termos de busca. | Manter estado de login, preferências do usuário, objetos complexos. |
| **Tipo de Dado** | Apenas strings simples. | Strings (mas pode armazenar objetos via `JSON.stringify`). |
| **Visibilidade** | Visível para o usuário na barra de endereço. | Invisível para o usuário. |
| **Persistência** | Nenhuma. Só existe na requisição da página. | `sessionStorage`: até a aba fechar. `localStorage`: permanente. |