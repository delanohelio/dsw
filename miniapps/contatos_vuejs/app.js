const { createApp } = Vue;

createApp({
    data() {
        return {
            api_contatos: 'http://172.16.36.31:5000/contatos',
            contatos: [],
            isLoading: false,
            erro: null,
            form: {
                nome: "",
                email: "",
                telefone: ""
            },
        };
    },
    mounted() {
        this.carregarContatos();
    },
    methods: {
        async adicionarContato(){

            const response = await fetch(this.api_contatos, {
                method: "POST",
                body: JSON.stringify(this.form)
            })

            if (response.ok) {
                this.carregarContatos();
            }else{
                this.erro = response.text();
            }

            this.form.nome = "";
            this.form.email = "";
            this.form.telefone = "";

        },

        async carregarContatos(){
            this.isLoading = true;

            const response = await fetch(this.api_contatos);

            if (response.ok) {
                this.contatos = await response.json();
            }else{
                this.erro = await response.text();
            }

            this.isLoading = false;
        },

        async removeContato(id) {
            const response = await fetch(this.api_contatos + '/' + id, {
                method: "DELETE"
            })
            if (response.ok) {
                this.carregarContatos();
            }else {
                this.erro = response.text();
            }
        }


    }
}).mount('#app');