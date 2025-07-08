const API_URL = 'http://200.133.17.234:5000';
const { createApp } = Vue;

createApp({
    data() {
        return {
            produtos: [],
            carrinho: [],
            isLoading: false,
            erro: null
        }
    },
    methods: {
        async carregarProdutos() {
            this.isLoading = true;
            this.erro = null;
            const response = await fetch(`${API_URL}/produtos`);

            // Tratamento de erro sem lançar exceção
            if (response.ok) {
                this.produtos = await response.json();
            } else {
                this.erro = 'Não foi possível carregar os produtos. Verifique se o json-server está rodando.';
            }
            this.isLoading = false;
        },
        adicionarAoCarrinho(produto) {
            // TÉCNICA 2: Salva o produto no sessionStorage
            const carrinhoAtual = JSON.parse(sessionStorage.getItem('carrinho') || '[]');
            carrinhoAtual.push(produto);
            sessionStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));

            // Atualiza o contador local
            this.carrinho = carrinhoAtual;
            alert(`${produto.nome} foi adicionado ao carrinho!`);
        }
    },
    mounted() {
        this.carregarProdutos();
        // Atualiza o contador do carrinho ao carregar a página
        this.carrinho = JSON.parse(sessionStorage.getItem('carrinho') || '[]');
    }
}).mount('#app');