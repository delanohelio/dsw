const { createApp } = Vue;

createApp({
    data() {
        return {
            carrinho: []
        }
    },
    computed: {
        totalCarrinho() {
            // Calcula o total dos preços dos itens no carrinho
            return this.carrinho.reduce((total, item) => total + item.preco, 0);
        }
    },
    created() {
        // TÉCNICA 2: Lê os dados do carrinho do sessionStorage
        const carrinhoSalvo = sessionStorage.getItem('carrinho');
        if (carrinhoSalvo) {
            this.carrinho = JSON.parse(carrinhoSalvo);
        }
    }
}).mount('#app');