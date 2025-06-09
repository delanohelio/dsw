## 🧠 Estruturas Funcionais em JavaScript para Desenvolvimento Web

### 1. **Funções de Ordem Superior (Higher-Order Functions)**

#### ✅ O que são:

Funções que recebem outras funções como argumento ou retornam uma função. São fundamentais para abstrair lógica repetitiva, melhorar a legibilidade e separar preocupações.

#### 💡 Aplicação Web:

* Manipular listas (como dados vindos de uma API REST)
* Criar funções personalizadas de validação ou tratamento de eventos

#### 📦 Exemplo funcional:

```js
const users = [
  { name: 'Ana', active: true },
  { name: 'Carlos', active: false },
  { name: 'Lia', active: true }
];

// Filtrar usuários ativos e extrair nomes
const activeUserNames = users
  .filter(user => user.active)
  .map(user => user.name);
```

#### ❌ Imperativo equivalente:

```js
const activeUserNames = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].active) {
    activeUserNames.push(users[i].name);
  }
}
```

#### ✅ Benefício:

Mais conciso, expressivo e fácil de manter. Reduz a possibilidade de bugs em loops manuais.

---

### 2. **Funções Puras**

#### ✅ O que são:

Funções que não alteram o estado externo e sempre retornam o mesmo resultado para os mesmos parâmetros.

#### 💡 Aplicação Web:

* Lógicas de renderização em React ou Vue
* Transformações de dados antes de exibir na UI

#### 📦 Exemplo funcional:

```js
const formatPrice = price => `R$ ${price.toFixed(2)}`;
formatPrice(10); // "R$ 10.00"
```

#### ❌ Imperativo equivalente com efeito colateral:

```js
let currency = '';
function formatPrice(price) {
  currency = `R$ ${price.toFixed(2)}`;
}
formatPrice(10);
console.log(currency);
```

#### ✅ Benefício:

Previsibilidade, testabilidade, mais fácil de debugar e reaproveitar em componentes.

---

### 3. **Imutabilidade**

#### ✅ O que é:

Não modificar diretamente objetos ou arrays; criar cópias ao invés de mutar.

#### 💡 Aplicação Web:

* Atualizar estado em frameworks reativos (React, Vue)
* Manter histórico de mudanças (ex: undo/redo)

#### 📦 Exemplo funcional:

```js
const product = { name: 'Mouse', price: 50 };
const updatedProduct = { ...product, price: 45 };
```

#### ❌ Imperativo com mutação:

```js
const product = { name: 'Mouse', price: 50 };
product.price = 45; // Estado alterado diretamente
```

#### ✅ Benefício:

Evita efeitos colaterais inesperados, especialmente importante em interfaces reativas e testes.

---

### 4. **Composição de Funções**

#### ✅ O que é:

Combinar funções pequenas e reutilizáveis para formar operações mais complexas.

#### 💡 Aplicação Web:

* Cadeias de validações de formulário
* Pipeline de transformação de dados antes de renderizar

#### 📦 Exemplo funcional:

```js
const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const slugify = str => str.split(' ').join('-');

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const formatSlug = compose(slugify, toLower, trim);
formatSlug('   Hello World  '); // "hello-world"
```

#### ❌ Imperativo:

```js
function formatSlug(text) {
  text = text.trim();
  text = text.toLowerCase();
  return text.split(' ').join('-');
}
```

#### ✅ Benefício:

Modularidade, reuso de funções simples, testes mais fáceis.

---

### 5. **Currying**

#### ✅ O que é:

Transformar uma função de múltiplos argumentos em uma cadeia de funções com um argumento.

#### 💡 Aplicação Web:

* Criação de manipuladores de eventos com configurações
* Criação de funções especializadas para reuso

#### 📦 Exemplo funcional:

```js
const withPrefix = prefix => text => `${prefix}-${text}`;
const withUserPrefix = withPrefix('user');
withUserPrefix('123'); // "user-123"
```

#### ❌ Imperativo:

```js
function withUserPrefix(text) {
  return 'user-' + text;
}
```

#### ✅ Benefício:

Facilita reuso e criação de funções altamente específicas com código genérico.

---

### 6. **Lazy Evaluation**

#### ✅ O que é:

Avaliar expressões **somente quando necessário**. Em JS, isso aparece mais com `generators`, iteração e libs como `lodash/fp`.

#### 💡 Aplicação Web:

* Paginação sob demanda
* Otimizar performance em grandes listas (ex: renderização parcial)

#### 📦 Exemplo com generator:

```js
function* paginate(items, pageSize) {
  for (let i = 0; i < items.length; i += pageSize) {
    yield items.slice(i, i + pageSize);
  }
}

const pages = paginate([1, 2, 3, 4, 5, 6], 2);
console.log(pages.next().value); // [1, 2]
```

#### ❌ Eager (tudo de uma vez):

```js
const pages = [];
for (let i = 0; i < items.length; i += 2) {
  pages.push(items.slice(i, i + 2));
}
```

#### ✅ Benefício:

Economia de recursos, útil para grandes volumes de dados ou interfaces dinâmicas.

---

### 7. **Recursão**

#### ✅ O que é:

Função que se chama a si mesma. Útil para estruturas recursivas (como árvore de comentários).

#### 💡 Aplicação Web:

* Renderização de menus aninhados
* Processamento de estrutura DOM ou JSON aninhado

#### 📦 Exemplo funcional:

```js
const countNodes = node => {
  if (!node.children) return 1;
  return 1 + node.children.reduce((sum, child) => sum + countNodes(child), 0);
};
```

#### ❌ Imperativo:

```js
function countNodes(root) {
  let count = 1;
  if (root.children) {
    for (const child of root.children) {
      count += countNodes(child);
    }
  }
  return count;
}
```

#### ✅ Benefício:

Expressa naturalmente problemas recursivos, evita complexidade de laços e estados intermediários.

---

### 8. **Callbacks e Promessas**

#### ✅ O que são:

* **Callback**: função passada para ser executada depois de uma operação
* **Promise**: representação de valor futuro, facilita o controle de assíncrono

#### 💡 Aplicação Web:

* Requisições AJAX/fetch
* Manipulação de eventos
* Animações

#### 📦 Exemplo com Promessa:

```js
fetch('/api/products')
  .then(response => response.json())
  .then(products => console.log(products))
  .catch(err => console.error(err));
```

#### ❌ Imperativo com callback aninhado (callback hell):

```js
getData(function(response) {
  parseData(response, function(parsed) {
    doSomething(parsed, function() {
      console.log('Feito!');
    });
  });
});
```

#### ✅ Benefício:

Promises e async/await tornam o código assíncrono mais linear, legível e controlável.
