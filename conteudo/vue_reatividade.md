# Semana 06 – Reatividade e Propriedades Computadas no Vue

Na última aula, vimos como o Vue.js torna a criação de interfaces mais simples. A "mágica" por trás disso é o **sistema de reatividade**. Nesta semana, vamos aprofundar nosso entendimento sobre como a reatividade funciona e aprender a usar uma das ferramentas mais poderosas do Vue: as **Propriedades Computadas (`computed`)**.

## 🎯 Objetivos da Semana

- Entender em mais detalhes o sistema de reatividade do Vue.
- Aprender a lógica de criar **dados derivados** (informações que dependem de outras).
- Implementar **propriedades computadas** para simplificar templates e otimizar o desempenho.
- Diferenciar o uso de `computed` e `methods`.
- Aplicar esses conceitos na prática, construindo uma calculadora de IMC.

---

## 🔬 Aprofundando em Reatividade

Reatividade é o mecanismo que faz com que a interface do usuário (o HTML) **reaja** automaticamente às alterações nos dados do JavaScript.

Quando você define um objeto no `data()` da sua aplicação Vue, o Vue "transforma" cada propriedade desse objeto em um dado reativo. Ele fica "observando" essas propriedades. Assim que uma delas muda de valor, o Vue sabe exatamente qual parte do HTML depende dela e a atualiza na tela.

**Exemplo Simples:**

```javascript
// app.js
createApp({
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    incrementar() {
      // Ao alterar 'this.contador', o Vue sabe que precisa atualizar o HTML.
      this.contador++;
    }
  }
}).mount('#app');
````

```html
<div id="app">
  <p>Cliques: {{ contador }}</p>
  <button @click="incrementar">Clique aqui</button>
</div>
```

Neste caso, nunca precisamos fazer `document.getElementById` para atualizar o parágrafo. Nós apenas mudamos o dado (`this.contador++`), e o Vue cuida do resto.

-----

## 🤔 O Problema: Dados Derivados

Muitas vezes, precisamos exibir uma informação que é **calculada a partir de outros dados**.

Imagine um formulário com nome e sobrenome. Queremos exibir o nome completo.

```javascript
// app.js
data() {
  return {
    primeiroNome: 'Fulano',
    ultimoNome: 'de Tal'
  }
}
```

Poderíamos combinar os dois diretamente no template:

```html
<p>Nome Completo: {{ primeiroNome }} {{ ultimoNome }}</p>
```

Isso funciona, mas tem problemas:

1.  **Polui o template:** Se a lógica for mais complexa (ex: `primeiroNome.toUpperCase()`), o HTML fica difícil de ler.
2.  **Não é reutilizável:** Se precisarmos do nome completo em outro lugar, teremos que repetir a lógica.

-----

## ✨ A Solução: Propriedades Computadas

Para resolver isso, o Vue nos oferece as **propriedades computadas (`computed`)**. Elas são a forma ideal de criar dados derivados.

Uma propriedade computada é declarada como uma função, mas é usada no template como se fosse uma propriedade normal do `data`.

**Exemplo com `computed`:**

```javascript
// app.js
createApp({
  data() {
    return {
      primeiroNome: 'Fulano',
      ultimoNome: 'de Tal'
    }
  },
  computed: {
    // Esta é uma propriedade computada
    nomeCompleto() {
      // 'this' acessa as propriedades de 'data'
      console.log("Calculando o nome completo...");
      return `${this.primeiroNome} ${this.ultimoNome}`;
    }
  }
}).mount('#app');
```

```html
<div id="app">
  <p>Nome Completo: {{ nomeCompleto }}</p>
  
  <input type="text" v-model="primeiroNome">
  <input type="text" v-model="ultimoNome">
</div>
```

Agora, o template está limpo (`{{ nomeCompleto }}`) e a lógica está organizada no JavaScript.

### A Vantagem Secreta: O Cache\!

Propriedades computadas são **cacheadas com base em suas dependências reativas**. No exemplo acima, `nomeCompleto` depende de `primeiroNome` e `ultimoNome`.

- A função `nomeCompleto()` só será executada novamente se `primeiroNome` ou `ultimoNome` mudarem.
- Se qualquer outra parte da aplicação for atualizada, o Vue não irá recalcular o `nomeCompleto`, ele simplesmente retornará o último resultado salvo em cache. Isso torna a aplicação muito mais performática\!

-----

## 🆚 Propriedades Computadas vs. Métodos

Você poderia obter o mesmo resultado usando um método:

```javascript
// Usando um método
methods: {
  calcularNomeCompleto() {
    return `${this.primeiroNome} ${this.ultimoNome}`;
  }
}
```

```html
<p>Nome Completo: {{ calcularNomeCompleto() }}</p>
```

A diferença fundamental é o **cache**.

- **Propriedade Computada:** Só executa quando uma dependência muda. É performática.
- **Método:** Executa **toda vez** que a aplicação é renderizada novamente, mesmo que os dados não tenham mudado.

> **Regra geral:** Para exibir dados derivados, prefira sempre `computed`. Use `methods` para ações que precisam ser executadas em resposta a eventos (como cliques em botões).

-----

## 💪 Miniapp: Calculadora de IMC

Nesta semana, vamos aplicar esses conceitos para criar uma **Calculadora de IMC (Índice de Massa Corporal)**.

- **`data`:** Teremos duas propriedades, `peso` e `altura`, ligadas a campos de `input` com `v-model`.
- **`computed`:**
    1.  Uma propriedade `imc` que calcula o IMC (`peso / (altura * altura)`) sempre que o peso ou a altura mudarem.
    2.  Uma propriedade `classificacao` que retorna o texto correspondente ("Abaixo do peso", "Normal", "Sobrepeso", etc.) com base no valor da propriedade computada `imc`.

Este é um caso de uso perfeito para propriedades computadas, pois tanto o valor do IMC quanto sua classificação são dados derivados do peso e da altura.

```