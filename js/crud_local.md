# **CRUD com DOM e localStorage**

Nesta aula, você vai aprender a criar um sistema **CRUD (Create, Read, Update, Delete)** usando **JavaScript puro**, manipulação do **DOM** e **localStorage** para persistir os dados mesmo após recarregar a página.

Vamos implementar uma **lista de tarefas (TODO List)** onde os dados são armazenados no navegador do usuário.

---

## **📌 Objetivos**
✅ Criar, ler, atualizar e deletar tarefas localmente  
✅ Manipular o DOM para exibir os dados dinamicamente  
✅ Armazenar e recuperar dados do **localStorage**  
✅ Controlar o estado da aplicação sem backend

---

## **🔍 Conceitos Principais**

### **1. Estrutura de Dados**
Usaremos um **array de objetos** para armazenar as tarefas:

```javascript
let tarefas = [
  { id: 1, texto: "Estudar JavaScript", concluida: false },
  { id: 2, texto: "Praticar DOM", concluida: true },
];
```
- **`id`**: Identificador único (gerado automaticamente)
- **`texto`**: Descrição da tarefa
- **`concluida`**: Status (`true` ou `false`)

---

### **2. localStorage**
O **localStorage** permite armazenar dados no navegador de forma persistente (mesmo após fechar a página).

#### **Métodos principais:**
| Método | Descrição | Exemplo |
|--------|-----------|---------|
| `setItem()` | Salva dados no localStorage | `localStorage.setItem("chave", JSON.stringify(dados))` |
| `getItem()` | Recupera dados | `JSON.parse(localStorage.getItem("chave"))` |
| `removeItem()` | Remove um item | `localStorage.removeItem("chave")` |
| `clear()` | Limpa todo o localStorage | `localStorage.clear()` |

⚠️ **Importante:**
- O localStorage só armazena **strings** (por isso usamos `JSON.stringify` e `JSON.parse`).
- Os dados ficam disponíveis **apenas no mesmo domínio**.

---

## **🚀 Passo a Passo do CRUD com localStorage**

### **1. Inicializar e Carregar Dados**
Antes de manipular o array `tarefas`, devemos **verificar se já existem dados salvos**:

```javascript
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
let ultimoId = tarefas.length > 0 ? Math.max(...tarefas.map(t => t.id)) : 0;
```

### **2. Salvar Dados no localStorage**
Sempre que o array for modificado, **atualizamos o localStorage**:

```javascript
function salvarNoLocalStorage() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
```

### **3. Operações CRUD**

#### **🔹 Create (Adicionar Tarefa)**
```javascript
function adicionarTarefa(texto) {
  if (!texto.trim()) return alert("Digite uma tarefa válida.");
  
  ultimoId++;
  tarefas.push({ id: ultimoId, texto, concluida: false });
  salvarNoLocalStorage(); // Atualiza localStorage
  renderizarLista();
}
```

#### **🔹 Read (Listar Tarefas)**
```javascript
function renderizarLista() {
  const listaEl = document.getElementById("lista-tarefas");
  listaEl.innerHTML = "";

  tarefas.forEach(tarefa => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span style="text-decoration: ${tarefa.concluida ? "line-through" : "none"}">
        ${tarefa.texto}
      </span>
      <button onclick="alternarConcluida(${tarefa.id})">
        ${tarefa.concluida ? "Desfazer" : "Concluir"}
      </button>
      <button onclick="deletarTarefa(${tarefa.id})">Excluir</button>
    `;
    listaEl.appendChild(li);
  });
}
```

#### **🔹 Update (Alternar Conclusão)**
```javascript
function alternarConcluida(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.concluida = !tarefa.concluida;
    salvarNoLocalStorage(); // Atualiza localStorage
    renderizarLista();
  }
}
```

#### **🔹 Delete (Remover Tarefa)**
```javascript
function deletarTarefa(id) {
  if (!confirm("Tem certeza que deseja excluir?")) return;
  
  tarefas = tarefas.filter(t => t.id !== id);
  salvarNoLocalStorage(); // Atualiza localStorage
  renderizarLista();
}
```

---

## **📂 Exemplo Completo**

### **HTML**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Lista de Tarefas com localStorage</title>
</head>
<body>
  <h1>Minha Lista de Tarefas</h1>
  <input type="text" id="nova-tarefa" placeholder="Digite uma tarefa...">
  <button id="btn-adicionar">Adicionar</button>
  <ul id="lista-tarefas"></ul>

  <script src="script.js"></script>
</body>
</html>
```

### **JavaScript (script.js)**
```javascript
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
let ultimoId = tarefas.length > 0 ? Math.max(...tarefas.map(t => t.id)) : 0;

function salvarNoLocalStorage() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function adicionarTarefa(texto) {
  if (!texto.trim()) return alert("Digite uma tarefa válida.");
  
  ultimoId++;
  tarefas.push({ id: ultimoId, texto, concluida: false });
  salvarNoLocalStorage();
  renderizarLista();
}

function alternarConcluida(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.concluida = !tarefa.concluida;
    salvarNoLocalStorage();
    renderizarLista();
  }
}

function deletarTarefa(id) {
  if (!confirm("Tem certeza que deseja excluir?")) return;
  
  tarefas = tarefas.filter(t => t.id !== id);
  salvarNoLocalStorage();
  renderizarLista();
}

function renderizarLista() {
  const listaEl = document.getElementById("lista-tarefas");
  listaEl.innerHTML = "";

  tarefas.forEach(tarefa => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span style="text-decoration: ${tarefa.concluida ? "line-through" : "none"}">
        ${tarefa.texto}
      </span>
      <button onclick="alternarConcluida(${tarefa.id})">
        ${tarefa.concluida ? "Desfazer" : "Concluir"}
      </button>
      <button onclick="deletarTarefa(${tarefa.id})">Excluir</button>
    `;
    listaEl.appendChild(li);
  });
}

// Event Listeners
document.getElementById("btn-adicionar").addEventListener("click", () => {
  const inputEl = document.getElementById("nova-tarefa");
  adicionarTarefa(inputEl.value);
  inputEl.value = "";
  inputEl.focus();
});

// Inicialização
renderizarLista();
```

---

## **🔧 Melhorias Possíveis**
- **Editar tarefas** (alterar texto)
- **Filtrar tarefas** (concluídas/pendentes)
- **Melhorar UI com CSS**
- **Adicionar data de criação**
- **Sincronizar com um backend futuro**

---

## **📚 Conclusão**
Agora você tem um **CRUD funcional** com **persistência em localStorage**!

👉 **Desafio:** Tente implementar a **edição de tarefas** ou um **sistema de filtros**.

**Bons estudos!** 🚀💻