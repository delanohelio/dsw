const API_URL = 'http://200.133.17.234:5000';
const { createApp } = Vue;

createApp({
    data() {
        return {
            produto: null,
            isLoading: false,
            erro: null
        }
    },
    methods: {
        async buscarProduto(id) {
            this.isLoading = true;
            this.erro = null;
            const response = await fetch(`${API_URL}/produtos/${id}`);

            if (response.ok) {
                this.produto = await response.json();
            } else {
                this.erro = `Produto com ID ${id} não encontrado.`;
            }
            this.isLoading = false;
        }
    },
    mounted() {
        // TÉCNICA 1: Lê o ID da URL
        const urlParams = new URLSearchParams(window.location.search);
        const produtoId = urlParams.get('id');
        if (produtoId) {
            this.buscarProduto(produtoId);
        } else {
            this.erro = 'Nenhum ID de produto foi fornecido.';
        }
    }
}).mount('#app');