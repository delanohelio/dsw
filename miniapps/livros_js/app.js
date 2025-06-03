const URL_API = "http://localhost:3000/livros";

const listaLivros = document.getElementById("lista-livros");
const formLivro = document.getElementById("form-livro");
const inputTitulo = document.getElementById("titulo");
const inputAutor = document.getElementById("autor");

async function carregarLivros() {
    try {
        const resposta = await fetch(URL_API);
        const livros = await resposta.json();
        renderizarLivros(livros);
    } catch (erro) {
        console.error("Erro ao carregar livros:", erro);
    }
}

async function adicionarLivro(titulo, autor) {
    const novoLivro = {
        titulo: titulo,
        autor: autor
    };

    try {
        const resposta = await fetch(URL_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoLivro)
        });

        if (resposta.ok) {
            carregarLivros();
        }
    } catch (erro) {
        console.error("Erro ao adicionar livro:", erro);
    }
}

async function excluirLivro(id) {
    try {
        const resposta = await fetch(`${URL_API}/${id}`, {
            method: "DELETE"
        });

        if (resposta.ok) {
            carregarLivros();
        }
    } catch (erro) {
        console.error("Erro ao excluir livro:", erro);
    }
}

function renderizarLivros(livros) {
    listaLivros.innerHTML = "";

    livros.forEach(livro => {
        const item = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = `${livro.titulo} - ${livro.autor}`;

        const botao = document.createElement("button");
        botao.textContent = "Excluir";
        botao.addEventListener("click", () => excluirLivro(livro.id));

        item.appendChild(texto);
        item.appendChild(botao);

        listaLivros.appendChild(item);
    });
}

formLivro.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const titulo = inputTitulo.value.trim();
    const autor = inputAutor.value.trim();

    if (titulo !== "" && autor !== "") {
        adicionarLivro(titulo, autor);
        inputTitulo.value = "";
        inputAutor.value = "";
    }
});

// Inicia carregando os livros da API
carregarLivros();
