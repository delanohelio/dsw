const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Olá, Vue!',
            // Nossos livros, tarefas, ou qualquer outro dado virá aqui
            livros: [
                { id: 1, titulo: 'O Alquimista', autor: 'Paulo Coelho' },
                { id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
            ]
        }
    }
}).mount('#app');