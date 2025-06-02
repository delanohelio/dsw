# CRUD Local com DOM

Nesta aula, você vai aprender a criar um sistema básico de CRUD (Create, Read, Update, Delete) utilizando apenas JavaScript puro e manipulação do DOM, armazenando os dados em memória (durante a sessão da página).

---

## Objetivos

- Entender os conceitos de CRUD aplicados a uma lista de tarefas (TODOs)
- Aprender a manipular dados locais em arrays no JavaScript
- Praticar criação, listagem, edição e exclusão de itens na interface
- Controlar o estado da aplicação sem backend, usando somente o navegador

---

## Conceitos Principais

### 1. Estrutura de dados local

Usaremos um array para armazenar as tarefas:

```js
let tarefas = [
  { id: 1, texto: 'Estudar JavaScript', concluida: false },
  { id: 2, texto: 'Praticar DOM', concluida: true },
];
````

* `id`: identificador único da tarefa
* `texto`: descrição da tarefa
* `concluida`: status booleano da tarefa

### 2. Operações CRUD

* **Create (Criar):** Adicionar uma nova tarefa ao array
* **Read (Ler):** Exibir todas as tarefas atuais no HTML
* **Update (Atualizar):** Marcar tarefa como concluída ou editar texto
* **Delete (Deletar):** Remover tarefa da lista

---

## Passo a passo para o CRUD local

### Criar uma tarefa

1. Obtenha o texto do campo de entrada (`input`)
2. Crie um objeto com as propriedades necessárias
3. Adicione o objeto ao array `tarefas`
4. Atualize a lista exibida na tela

### Ler / Listar as tarefas

1. Percorra o array `tarefas`
2. Para cada tarefa, crie elementos HTML dinamicamente (`li`, `button`, etc)
3. Insira esses elementos dentro de um container (`ul` ou `div`)

### Atualizar tarefa

* Marcar como concluída: altere a propriedade `concluida` para `true` ou `false`
* Editar texto: permita alterar o campo texto da tarefa (opcional para essa aula)

### Deletar tarefa

* Remova a tarefa do array pelo `id`
* Atualize a lista na interface

---

## Exemplo básico de implementação

```js
const tarefas = [];
let ultimoId = 0;

// Referências aos elementos HTML
const listaEl = document.getElementById('lista-tarefas');
const inputEl = document.getElementById('nova-tarefa');
const btnAdd = document.getElementById('btn-adicionar');

function adicionarTarefa(texto) {
  if (!texto.trim()) return alert('Digite uma tarefa válida.');
  ultimoId++;
  tarefas.push({ id: ultimoId, texto, concluida: false });
  renderizarLista();
}

function deletarTarefa(id) {
  const index = tarefas.findIndex(t => t.id === id);
  if (index > -1) {
    tarefas.splice(index, 1);
    renderizarLista();
  }
}

function alternarConcluida(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.concluida = !tarefa.concluida;
    renderizarLista();
  }
}

function renderizarLista() {
  listaEl.innerHTML = '';
  tarefas.forEach(tarefa => {
    const li = document.createElement('li');
    li.textContent = tarefa.texto;
    li.style.textDecoration = tarefa.concluida ? 'line-through' : 'none';

    // Botão de concluir
    const btnConcluir = document.createElement('button');
    btnConcluir.textContent = tarefa.concluida ? 'Desfazer' : 'Concluir';
    btnConcluir.onclick = () => alternarConcluida(tarefa.id);

    // Botão de deletar
    const btnDeletar = document.createElement('button');
    btnDeletar.textContent = 'Excluir';
    btnDeletar.onclick = () => deletarTarefa(tarefa.id);

    li.appendChild(btnConcluir);
    li.appendChild(btnDeletar);
    listaEl.appendChild(li);
  });
}

btnAdd.addEventListener('click', () => {
  adicionarTarefa(inputEl.value);
  inputEl.value = '';
  inputEl.focus();
});

// Opcional: adicionar tecla Enter para adicionar tarefa
inputEl.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    btnAdd.click();
  }
});

// Inicialização
renderizarLista();
```

---

## Validações básicas

* Verifique se o texto da tarefa não está vazio
* Evite adicionar tarefas duplicadas (opcional)
* Confirme ações de exclusão (opcional)

---

## Próximos passos

* Persistir dados no `localStorage` para manter as tarefas após recarregar a página
* Implementar edição de texto das tarefas
* Melhorar a interface com CSS para um visual mais agradável
* Adicionar filtros para mostrar somente tarefas concluídas ou pendentes

---

## Exercício prático

* Desenvolva seu próprio miniapp de lista de tarefas com as funções de criar, listar, concluir e deletar.
* Experimente adicionar um filtro para mostrar apenas tarefas pendentes.
* Brinque com o estilo CSS para melhorar a usabilidade.

---

**Boa prática!** Manipular dados localmente e atualizar a interface dinamicamente é um passo fundamental para o desenvolvimento frontend moderno.
