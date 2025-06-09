# 🧱 Manipulação de HTML com JavaScript (DOM)

## 📌 O que é DOM?

O **DOM (Document Object Model)** é uma estrutura em árvore que representa os elementos HTML de uma página. Com JavaScript, você pode **acessar**, **modificar** e **criar** elementos HTML dinamicamente.

---

## 🔍 Selecionando Elementos

### Por ID

```js
const titulo = document.getElementById("titulo");
```

### Por classe

```js
const cards = document.getElementsByClassName("card");
```

### Por seletor (como no CSS)

```js
const botao = document.querySelector(".btn-principal"); // pega o primeiro
const todosOsBotoes = document.querySelectorAll("button"); // pega todos
```

---

## 🧾 Lendo e Alterando Conteúdo

### `textContent` – para texto

```js
titulo.textContent = "Nova mensagem";
```

### `innerHTML` – para HTML interno

```js
div.innerHTML = "<strong>Texto em negrito</strong>";
```

---

## ✏️ Lendo e Alterando Valores de Inputs

```html
<input id="nome" />
<button onclick="mostrarNome()">OK</button>
```

```js
function mostrarNome() {
  const nome = document.getElementById("nome").value;
  alert("Nome digitado: " + nome);
}
```

---

## ✨ Criando Elementos na Página

```js
const novaDiv = document.createElement("div");
novaDiv.textContent = "Nova entrega criada!";
novaDiv.classList.add("mensagem");
document.body.appendChild(novaDiv);
```

---

## 🧹 Removendo Elementos

```js
const item = document.getElementById("item1");
item.remove(); // remove do DOM
```

---

## 🧩 Trabalhando com Listas Dinâmicas

### Exemplo: Gerar uma lista de encomendas

```js
const lista = document.getElementById("lista-encomendas");

const encomendas = [
  { codigo: "A001", destino: "São Paulo" },
  { codigo: "A002", destino: "Belo Horizonte" }
];

function renderizarLista() {
  lista.innerHTML = ""; // limpa lista anterior
  encomendas.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = `${e.codigo} - ${e.destino}`;
    lista.appendChild(li);
  });
}

renderizarLista();
```

---

## 🔄 Respondendo a Eventos

### Clique

```js
document.getElementById("botao").addEventListener("click", function() {
  alert("Você clicou!");
});
```

### Mudança em inputs

```js
document.getElementById("cidade").addEventListener("change", function(event) {
  console.log("Selecionado:", event.target.value);
});
```

---

## 🧠 Filtros com JavaScript

Suponha que você tenha uma lista de encomendas e queira filtrar por cidade:

```js
function filtrarPorCidade(cidade) {
  const filtradas = encomendas.filter(e => e.destino === cidade);
  console.log(filtradas);
}
```

Ou usando input do usuário:

```js
const input = document.getElementById("filtro-cidade");
input.addEventListener("input", function () {
  const valor = input.value.toLowerCase();
  const filtradas = encomendas.filter(e => e.destino.toLowerCase().includes(valor));
  atualizarTela(filtradas);
});
```

---

## 📤 Carregando dados de API com fetch e Promisses

```js
fetch("https://exemplo.com/api/encomendas")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // renderiza os dados no HTML
  });
```

---

## 🪄 Classes CSS com JavaScript

Você pode adicionar ou remover classes CSS:

```js
elemento.classList.add("ativo");
elemento.classList.remove("erro");
elemento.classList.toggle("selecionado");
```

---

## ✅ Dicas Finais

* Use `querySelector` para capturar elementos do HTML.
* Faça funções para **renderizar listas**, **filtrar dados** e **interagir com formulários**.
* Crie elementos dinamicamente com `document.createElement`.
* Organize seu código em **funções bem nomeadas**.
* Sempre limpe o HTML antigo antes de renderizar novos dados.
