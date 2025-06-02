# 📘 Introdução à Programação com JavaScript para Desenvolvimento Web

## 🧠 O que é JavaScript?

JavaScript (JS) é uma **linguagem de programação** usada principalmente para tornar as páginas web **interativas e dinâmicas**. Ele roda no navegador do usuário e permite que páginas HTML **reajam a eventos**, **modifiquem conteúdos**, **validem formulários**, entre muitas outras funcionalidades.

---

## ✍️ Declarando Variáveis

### Tipos de declaração:

```js
var nome = "Maria"; // Evite usar 'var', pois tem escopo solto
let idade = 20;      // Escopo limitado ao bloco
const PI = 3.14;     // Valor constante (não muda)
```

### Regras:

* Use `let` quando a variável pode mudar
* Use `const` quando o valor não mudará
* Evite `var` (comportamento antigo)

---

## 🧩 Tipos de Dados

| Tipo      | Exemplo                    |
| --------- | -------------------------- |
| String    | `"Olá, mundo"`             |
| Number    | `10`, `3.14`               |
| Boolean   | `true`, `false`            |
| Array     | `[1, 2, 3]`                |
| Object    | `{nome: "Ana", idade: 25}` |
| Null      | `null`                     |
| Undefined | `undefined`                |

### Exemplos:

```js
let nome = "Lucas";         // string
let idade = 21;             // number
let ativo = true;           // boolean
let frutas = ["maçã", "banana"]; // array
let aluno = { nome: "Ana", nota: 9.5 }; // objeto
```

---

## 🔀 Estruturas de Seleção (Condicionais)

### `if`, `else if`, `else`

```js
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

### `switch` (para múltiplos casos)

```js
let dia = "segunda";

switch (dia) {
  case "segunda":
    console.log("Início da semana");
    break;
  case "sexta":
    console.log("Sextou!");
    break;
  default:
    console.log("Outro dia");
}
```

---

## 🔁 Estruturas de Repetição (Laços)

### `for`

```js
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}
```

### `while`

```js
let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}
```

### `for...of` (para arrays)

```js
let frutas = ["maçã", "banana", "uva"];
for (let fruta of frutas) {
  console.log(fruta);
}
```

---

## 📦 Estruturas de Dados

### 🔹 Arrays (Listas)

```js
let numeros = [1, 2, 3];
console.log(numeros[0]); // 1

numeros.push(4);         // Adiciona ao final
numeros.pop();           // Remove do final
numeros.length;          // Tamanho
```

### 🔹 Objetos

```js
let produto = {
  nome: "Camisa",
  preco: 29.99,
  emEstoque: true
};

console.log(produto.nome);         // "Camisa"
produto.preco = 25.00;             // Altera o valor
```

---

## 📚 Funções

```js
function somar(a, b) {
  return a + b;
}

let resultado = somar(2, 3);
console.log(resultado); // 5
```

### Funções anônimas e arrow functions

```js
const saudacao = () => {
  console.log("Olá!");
};

saudacao();
```

---

## 🎯 Trabalhando com Eventos no HTML

```html
<button onclick="clicou()">Clique aqui</button>
<script>
  function clicou() {
    alert("Você clicou!");
  }
</script>
```

---

## 📄 Manipulando o DOM (Document Object Model)

```html
<p id="mensagem">Olá!</p>
<button onclick="mudarTexto()">Mudar</button>

<script>
  function mudarTexto() {
    let paragrafo = document.getElementById("mensagem");
    paragrafo.textContent = "Texto alterado!";
  }
</script>
```

---

## 🧪 Validação de Dados no Formulário

```html
<input id="email" />
<button onclick="validar()">Validar</button>

<script>
  function validar() {
    let email = document.getElementById("email").value;
    if (email.includes("@")) {
      alert("E-mail válido!");
    } else {
      alert("E-mail inválido!");
    }
  }
</script>
```

---

## 📈 Práticas Recomendadas

* Comente o código com `//` ou `/* */`
* Use nomes de variáveis claros (`emailUsuario`, `quantidadeTotal`)
* Evite repetir código — use funções
* Teste no navegador com o console (F12 → Aba Console)

---

## ✅ Próximos Passos

* Aprender a **consumir dados de APIs** com `fetch`
* Entender eventos mais avançados (submit, input, change)
* Integrar com frameworks (como React ou Vue)
