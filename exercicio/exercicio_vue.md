## Exercício Prático: MiniApp de Lista de Contatos com Vue.js e API

### 🎯 **Objetivo**

O objetivo deste exercício é construir uma pequena aplicação de página única (SPA) para gerenciar uma lista de contatos. A aplicação deverá ser reativa e consumir os dados de uma API REST externa.

### 🌐 **API de Referência**

Para este exercício, utilizaremos uma API já disponível na rede local:

* **Endpoint Principal:** `http://172.16.36.31:5000/contatos`
* **Métodos a serem usados:** `GET` para listar e `POST` para adicionar.
* **Estrutura do Objeto `contato`:**
  ```json
  {
    "id": 1,
    "nome": "Fulano de Tal",
    "email": "fulano@email.com",
    "telefone": "99999-8888"
  }
  ```

### ✅ **Funcionalidades Requeridas**

1.  **Listar Contatos da API:** Ao carregar a página, a aplicação deve fazer uma requisição `GET` para a API e exibir todos os contatos retornados.
2.  **Adicionar um Novo Contato:** Um formulário deve permitir que o usuário insira `nome`, `email` e `telefone`. Ao submeter o formulário, a aplicação deve fazer uma requisição `POST` para a API com os dados do novo contato.
3.  **Atualização Automática da Lista:** Após um novo contato ser adicionado com sucesso, a lista na tela deve ser atualizada automaticamente para exibir o novo item (a melhor forma é recarregar a lista da API).
4.  **Feedback de Carregamento:** Enquanto a lista inicial de contatos está sendo buscada na API, uma mensagem "Carregando contatos..." deve ser exibida.
5.  **Tratamento de Erro:** Se a API não responder ou retornar um erro, uma mensagem de erro amigável deve ser mostrada ao usuário (ex: "Não foi possível carregar a lista de contatos.").

### 🧠 **Conceitos do Vue.js a serem aplicados**

* Criação da instância Vue com `createApp`.
* Uso de `data()` para armazenar o estado (a lista de contatos, os valores dos campos do formulário, o estado de `isLoading` e a mensagem de `erro`).
* Uso do hook `mounted()` para fazer a chamada inicial à API.
* Uso de `methods` para encapsular a lógica (`carregarContatos`, `adicionarContato`).
* Diretivas `v-for`, `v-model`, e `v-if`/`v-else`.
* Manipulação de eventos com `@submit.prevent`.
* Uso da `fetch` API com `async/await` dentro dos métodos.

-----

### 💻 **Templates HTML e CSS**

Para agilizar o desenvolvimento, utilize os templates abaixo. Crie os arquivos `index.html`, `style.css` e `app.js`.

#### **`index.html`**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista de Contatos com Vue.js</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://unpkg.com/vue@3" defer></script>
  <script src="app.js" defer></script>
</head>
<body>

  <div id="app">
    <div class="container">
      <h1>📞 Lista de Contatos</h1>

      <form class="form-group" @submit.prevent="adicionarContato">
        <input type="text" v-model="form.nome" placeholder="Nome" required>
        <input type="email" v-model="form.email" placeholder="E-mail" required>
        <input type="text" v-model="form.telefone" placeholder="Telefone" required>
        <button type="submit">Adicionar</button>
      </form>

      <div class="feedback-area">
        <p v-if="isLoading">Carregando contatos...</p>
        <p v-if="erro" class="erro">{{ erro }}</p>
      </div>

      <ul class="contact-list" v-if="!isLoading && !erro">
        <li v-for="contato in contatos" :key="contato.id">
          <div class="contact-info">
            <strong>{{ contato.nome }}</strong>
            <span>{{ contato.email }} | {{ contato.telefone }}</span>
          </div>
          </li>
      </ul>
       <p v-if="!isLoading && !erro && contatos.length === 0">Nenhum contato cadastrado.</p>

    </div>
  </div>

</body>
</html>
```

#### **`style.css`**

```css
* {
    box-sizing: border-box;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

body {
    background-color: #f4f6f8;
    color: #333;
    display: flex;
    justify-content: center;
    padding-top: 40px;
}

.container {
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

h1 {
    text-align: center;
    margin-bottom: 25px;
    color: #2c3e50;
}

.form-group {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.form-group input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.form-group button {
    padding: 0 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
}

.feedback-area {
    text-align: center;
    min-height: 24px;
    margin: 15px 0;
    font-style: italic;
    color: #7f8c8d;
}

.feedback-area .erro {
    color: #e74c3c;
    font-weight: bold;
}

.contact-list {
    list-style: none;
    padding: 0;
}

.contact-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #ecf0f1;
    border-radius: 5px;
    margin-bottom: 10px;
}

.contact-info {
    display: flex;
    flex-direction: column;
}

.contact-info strong {
    font-size: 1.1em;
    color: #34495e;
}

.contact-info span {
    font-size: 0.9em;
    color: #7f8c8d;
}

.btn-delete {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
}
```

### Entrega
Você deve zipar os três arquivos e enviar em atividade atribuída no classroom. O prazo é o horário da aula.

### 🚀 **Desafio Opcional (Bonus)**

Após concluir as funcionalidades básicas, adicione um botão "Excluir" a cada item da lista. Ao ser clicado, ele deve fazer uma requisição `DELETE` para o endpoint `http://172.16.36.31:5000/contatos/:id` e remover o contato da lista.

Bom trabalho\!