## 📘 Consumo de API com JavaScript

### 🔎 O que é uma API?

API (Interface de Programação de Aplicações) é uma forma de um software se comunicar com outro. No desenvolvimento web, usamos APIs para que o frontend (HTML + JS) se comunique com um **backend**, como por exemplo um servidor que armazena livros, usuários, pedidos etc.

---

## 🚀 O que é o `fetch`?

`fetch()` é uma função do JavaScript que permite fazer requisições HTTP para uma API. Por padrão, ela é **assíncrona**, o que significa que não bloqueia o restante do código enquanto espera a resposta.

### 📌 Exemplo básico de uso:

```js
fetch("https://api.exemplo.com/livros")
  .then(resposta => resposta.json())
  .then(dados => {
    console.log(dados);
  })
  .catch(erro => {
    console.error("Erro ao buscar livros:", erro);
  });
```

### ✅ Usando `async/await` (forma moderna):

```js
async function buscarLivros() {
  try {
    const resposta = await fetch("https://api.exemplo.com/livros");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}
```

---

## 🛠️ Métodos HTTP mais usados

| Método   | Ação             | Quando usar?            |
| -------- | ---------------- | ----------------------- |
| `GET`    | Buscar dados     | Exibir informações      |
| `POST`   | Enviar novo dado | Adicionar item          |
| `DELETE` | Remover um dado  | Excluir item específico |

---

## 📚 Miniapp: Catálogo de Livros

[Link do miniapp](../miniapps/livros_js)

### 🔧 Funcionalidades:

* Listar todos os livros (GET)
* Adicionar novo livro (POST)
* Remover um livro da lista (DELETE)

> ⚠️ O backend simulado pode ser feito com [`json-server`](https://github.com/typicode/json-server), ou apenas com um mock local (array em JS).

---

### 📁 Estrutura dos arquivos:

* `index.html`
* `styles.css`
* `app.js`

---

## 🧪 Testando com `json-server`

1. Instale o `json-server`:

   ```bash
   npm install -g json-server
   ```

2. Crie um arquivo `db.json`:

```json
{
  "livros": [
    { "id": 1, "titulo": "O Alquimista", "autor": "Paulo Coelho" },
    { "id": 2, "titulo": "Dom Casmurro", "autor": "Machado de Assis" }
  ]
}
```

3. Inicie o servidor:

```bash
json-server --watch db.json --port 3000
```

4. Acesse `index.html` no navegador e utilize normalmente!

---

Depois, altere o `fetch()` para apontar para `http://localhost:3000/livros`.
