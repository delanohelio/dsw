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

        const btnConcluir = document.createElement('button');
        btnConcluir.textContent = tarefa.concluida ? 'Desfazer' : 'Concluir';
        btnConcluir.onclick = () => alternarConcluida(tarefa.id);

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