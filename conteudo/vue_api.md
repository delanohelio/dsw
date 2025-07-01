# 🛰️ VueJS com API REST

Até agora, trabalhamos com dados "mockados" (fixos no código) dentro do nosso `data`. Chegou a hora de dar o próximo passo e conectar nossa aplicação Vue a um backend real, usando a `fetch` API que já aprendemos.

**Objetivos da aula:**

* Buscar dados de uma API quando o componente é iniciado (`GET`).
* Enviar novos dados para a API (`POST`).
* Mostrar um feedback de "carregando" (loading) para o usuário.
* Tratar e exibir erros que possam ocorrer na comunicação.

-----

## 🔁 Ciclo de Vida do Vue e o Hook `mounted`

Um componente Vue passa por um **ciclo de vida**: ele é criado, montado no DOM, atualizado e, eventualmente, destruído. O Vue nos permite "enganchar" (`hook`) nosso próprio código nesses momentos.

Para buscar dados iniciais, o hook mais importante é o **`mounted()`**.

**`mounted()`**: É uma função que o Vue executa **automaticamente** assim que a instância do Vue é criada e inserida na página. É o lugar perfeito para fazer nossa primeira requisição `GET` e popular a aplicação com dados do servidor.

```javascript
createApp({
  data() {
    return {
      livros: []
    }
  },
  mounted() {
    // Este código roda automaticamente quando a app carregar.
    console.log('A aplicação foi montada! Hora de buscar os dados.');
    this.carregarLivros(); // Chamando nosso método para buscar os livros
  },
  methods: {
    async carregarLivros() {
      // Lógica do fetch aqui
    }
  }
}).mount('#app');
```

-----

## 📞 Integrando o `fetch` para buscar dados (`GET`)

Vamos pegar a lógica do `fetch` que já conhecemos e colocá-la dentro de um método.

A grande vantagem do Vue é: assim que atualizarmos `this.livros` com os dados da API, a tela será **reativamente** atualizada.

```javascript
methods: {
  async carregarLivros() {
    // Usaremos a mesma sintaxe async/await
    const response = await fetch('http://localhost:3000/livros');
    const dados = await response.json();

    // A mágica acontece aqui!
    // Ao atualizar 'livros', o v-for na tela é re-renderizado.
    this.livros = dados;
  }
}
```

-----

## ⏳ Tratando Estado de Carregamento (Loading)

Uma boa experiência de usuário exige que o sistema dê feedback enquanto uma operação demorada (como uma chamada de API) acontece.

**Passo 1: Adicionar uma variável de estado no `data`**

```javascript
data() {
  return {
    livros: [],
    isLoading: false // Começa como falso
  }
}
```

**Passo 2: Usar `v-if` no HTML**

```html
<div id="app">
  <div v-if="isLoading">
    <p>Carregando...</p>
  </div>

  <ul v-else>
    <li v-for="livro in livros" :key="livro.id">
      {{ livro.titulo }}
    </li>
  </ul>
</div>
```

**Passo 3: Atualizar o estado no método `fetch`**

```javascript
methods: {
  async carregarLivros() {
    this.isLoading = true; // Inicia o loading

    // Bloco finally é executado sempre, com sucesso ou erro.
    // Ótimo para garantir que o loading termine.
    try {
      const response = await fetch('http://localhost:3000/livros');
      const dados = await response.json();
      this.livros = dados;
    } catch (e) {
      // Trataremos os erros no próximo tópico
      console.error(e);
    } finally {
      this.isLoading = false; // Finaliza o loading
    }
  }
}
```

-----

## showError: Tratando Erros de Comunicação

E se a API estiver fora do ar? Precisamos informar o usuário.

**Passo 1: Adicionar uma variável de erro no `data`**

```javascript
data() {
  return {
    // ...
    erro: null // Começa como nulo
  }
}
```

**Passo 2: Usar `v-if` no HTML para mostrar o erro**

```html
<div id="app">
  <div v-if="erro" class="alerta-erro">
    <p>{{ erro }}</p>
  </div>
  </div>
```

**Passo 3: Capturar o erro no bloco `catch`**

```javascript
methods: {
  async carregarLivros() {
    this.isLoading = true;
    this.erro = null; // Reseta o erro a cada nova tentativa

    try {
      const response = await fetch('http://localhost:3000/livros');
      if (!response.ok) {
        throw new Error('Não foi possível carregar os livros.');
      }
      this.livros = await response.json();
    } catch (e) {
      // Define a mensagem de erro para ser exibida na tela
      this.erro = e.message;
    } finally {
      this.isLoading = false;
    }
  }
}
```

-----

## 📤 Enviando Dados com `POST`

Para adicionar um novo livro, o processo é similar. O método `adicionarLivro` agora fará uma requisição `POST` e, em caso de sucesso, chamará `carregarLivros()` para atualizar a lista com os dados mais recentes do servidor.

```javascript
methods: {
  // ... carregarLivros ...

  async adicionarLivro() {
    const novoLivro = {
      titulo: this.novoTitulo,
      autor: this.novoAutor
    };

    try {
      const response = await fetch('http://localhost:3000/livros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoLivro)
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar livro.');
      }

      // Limpa os campos e recarrega a lista do servidor
      this.novoTitulo = '';
      this.novoAutor = '';
      this.carregarLivros(); // Garante que a lista está 100% em sincronia

    } catch (e) {
      this.erro = e.message;
    }
  }
}
```

### ✅ Próximos Passos

Agora você sabe o essencial para criar uma aplicação Vue dinâmica e conectada a um backend. O próximo desafio é aplicar esses mesmos conceitos para as funcionalidades de **DELETE** e **PUT/PATCH**.