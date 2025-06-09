# ⚙️ Introdução ao Vue.js (sem componentes)

Bem-vindo ao Vue.js! Nesta aula, vamos dar os primeiros passos com um dos frameworks JavaScript mais populares e amigáveis para a criação de interfaces de usuário. Vamos abandonar a manipulação manual do DOM e descobrir um jeito muito mais poderoso e declarativo de construir aplicações web.

## 🤔 O que é Vue.js e por que usá-lo?

O Vue.js é um **framework progressivo**, o que significa que você pode começar pequeno e escalar conforme a necessidade. Ele nos ajuda a conectar nossos dados JavaScript com o HTML de uma forma muito eficiente.

A principal mágica do Vue é a **reatividade**.

* **Antes (com JS puro):** Para atualizar a tela, você precisava buscar um elemento (`getElementById`), criar outro (`createElement`), mudar seu conteúdo (`.textContent`) e adicioná-lo ao DOM (`.appendChild()`).
* **Agora (com Vue):** Você simplesmente **altera os dados** em seu JavaScript, e o Vue **automaticamente atualiza o HTML** para você. Simples assim!

## 🚀 Como começar: Usando a CDN

Para nossas aulas, usaremos o Vue diretamente no HTML através de uma CDN (Content Delivery Network). É a forma mais simples de começar, sem precisar de ferramentas de build complexas.

Basta adicionar esta tag `<script>` no seu `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Minha primeira App com Vue</title>
  <script src="https://unpkg.com/vue@3"></script>
</head>
<body>

  <div id="app">
    </div>

  <script>
    // Nosso código JavaScript do Vue virá aqui
  </script>

</body>
</html>
```

## 🧩 A Instância Vue: O Coração da Aplicação

Toda aplicação Vue começa com a criação de uma **instância da aplicação**. É nela que definimos nossos dados, métodos e conectamos tudo ao HTML.

```javascript
const { createApp } = Vue;

createApp({
  // Opções da nossa aplicação
}).mount('#app');
```

* `createApp({...})`: Cria a nossa aplicação com as configurações que passamos no objeto.
* `.mount('#app')`: Conecta e "monta" nossa aplicação na `div` com o `id="app"`.

### `data`: A Fonte da Verdade

A opção `data` é uma função que retorna um objeto. Este objeto contém todos os dados reativos da nossa aplicação.

```javascript
createApp({
  data() {
    return {
      message: 'Olá, Vue!',
      // Nossos livros, tarefas, ou qualquer outro dado virá aqui
      livros: [
        { id: 1, titulo: 'O Alquimista', autor: 'Paulo Coelho' },
        { id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
      ]
    }
  }
}).mount('#app');
```

## ✨ Diretivas: Instruções Especiais no HTML

Diretivas são atributos especiais com o prefixo `v-`. Elas dizem ao Vue para fazer algo especial com um elemento do DOM. Vamos ver as principais:

### **1. `{{ }}` (Interpolação de Texto)**
Para exibir dados no HTML, usamos a sintaxe de chaves duplas (Mustache).

**HTML:**
```html
<div id="app">
  <h1>{{ message }}</h1>
</div>
```

**Resultado:**
# Olá, Vue!

### **2. `v-for` (Renderização de Listas)**
Usada para renderizar uma lista de itens baseada em um array.

**HTML:**
```html
<div id="app">
  <ul>
    <li v-for="livro in livros" :key="livro.id">
      {{ livro.titulo }} - {{ livro.autor }}
    </li>
  </ul>
</div>
```
* `livro in livros`: Itera sobre o array `livros` do nosso `data`. A cada iteração, o objeto atual fica disponível como `livro`.
* `:key="livro.id"`: É um atributo **obrigatório** que ajuda o Vue a identificar cada item da lista de forma única, otimizando a performance.

### **3. `v-model` (Two-Way Data Binding)**
Cria uma ligação de mão dupla entre um input de formulário e uma propriedade no `data`. Quando o usuário digita no campo, o dado é atualizado. Se o dado mudar no JavaScript, o campo do formulário também muda.

**HTML:**
```html
<div id="app">
  <input type="text" v-model="novoTitulo" placeholder="Título do livro">
  <p>Você está digitando: {{ novoTitulo }}</p>
</div>
```

**JavaScript (dentro do `createApp`):**
```javascript
data() {
  return {
    novoTitulo: '' // Inicializa a propriedade
  }
}
```

### **4. `v-on` (ou `@`) (Manipulação de Eventos)**
Usada para ouvir eventos do DOM (como cliques) e executar um código quando eles ocorrem.

**HTML:**
```html
<button v-on:click="adicionarLivro">Adicionar Livro</button>
<button @click="adicionarLivro">Adicionar Livro</button>
```

### **5. `v-if` / `v-else` (Renderização Condicional)**
Renderiza um bloco de HTML apenas se uma expressão for verdadeira.

**HTML:**
```html
<div id="app">
  <p v-if="livros.length > 0">
    Temos {{ livros.length }} livros cadastrados.
  </p>
  <p v-else>
    Nenhum livro cadastrado ainda.
  </p>
</div>
```

## 🛠️ `methods`: Onde a Lógica Acontece

A propriedade `methods` é um objeto que contém todas as funções que nossa aplicação precisa. Essas funções podem alterar os dados e reagir a eventos.

**JavaScript:**
```javascript
createApp({
  data() {
    return {
      livros: [],
      novoTitulo: '',
      novoAutor: ''
    }
  },
  methods: {
    adicionarLivro() {
      // 'this' se refere à instância do Vue
      if (this.novoTitulo.trim() === '') return;

      this.livros.push({
        id: Date.now(), // ID simples para o exemplo
        titulo: this.novoTitulo,
        autor: this.novoAutor
      });

      // Limpa os campos do formulário
      this.novoTitulo = '';
      this.novoAutor = '';
    }
  }
}).mount('#app');
```
---

### ✅ Próximos Passos
Agora que você conhece o básico, o próximo passo é praticar! Vamos transformar nosso miniapp de "Catálogo de Livros" que fizemos em JS puro para uma versão reativa com Vue.