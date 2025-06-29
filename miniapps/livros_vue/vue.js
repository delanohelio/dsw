const { createApp } = Vue;

createApp({
    data() {
        return {
            novoTitulo: '',
            novoAutor: '',
            message: 'Olá, Vue!',
            idLivro: 2,
            // Nossos livros, tarefas, ou qualquer outro dado virá aqui
            livros: [
                { id: 0, titulo: 'O Alquimista', autor: 'Paulo Coelho' },
                { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
            ]
        }
    },

    methods: {
        adicionarLivro(e) {
            e.preventDefault()
            // 'this' se refere à instância do Vue
            if (this.novoTitulo.trim() === '') return;

            this.livros.push({
                id: this.idLivro++,
                titulo: this.novoTitulo,
                autor: this.novoAutor
            });

            // Limpa os campos do formulário
            this.novoTitulo = '';
            this.novoAutor = '';
        },
        excluirLivro(livro) {
            const index = this.livros.indexOf(livro);
            if (index === -1) return;
            this.livros.splice(index, 1);
        }

    }
}).mount('#app');

