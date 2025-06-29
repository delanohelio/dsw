const { createApp } = Vue;

createApp({
    data() {
        return {
            peso: 0,
            altura: 0
        };
    },
    computed: {
        // Propriedade computada para calcular o IMC
        imc() {
            // Retorna 0 se os valores não forem válidos para evitar erros
            if (this.peso <= 0 || this.altura <= 0) {
                return 0;
            }
            // Calcula o IMC e formata para duas casas decimais
            const valor = this.peso / (this.altura * this.altura);
            return parseFloat(valor.toFixed(2));
        },
        // Propriedade computada para determinar a classificação do IMC
        classificacao() {
            const imc = this.imc; // Usa o valor da outra propriedade computada

            if (imc < 18.5) {
                return { texto: 'Abaixo do peso', classe: 'abaixo' };
            } else if (imc >= 18.5 && imc < 25) {
                return { texto: 'Peso normal', classe: 'normal' };
            } else if (imc >= 25 && imc < 30) {
                return { texto: 'Sobrepeso', classe: 'sobrepeso' };
            } else if (imc >= 30 && imc < 40) {
                return { texto: 'Obesidade', classe: 'obesidade' };
            } else {
                return { texto: 'Obesidade grave', classe: 'obesidade-grave' };
            }
        }
    }
}).mount('#app');