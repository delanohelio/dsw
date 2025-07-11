## Guia: Criando e Usando a API do Projeto com `json-server`

Para o desenvolvimento do nosso projeto de logística, precisamos de um backend que forneça uma API REST. Vamos usar uma ferramenta fantástica chamada `json-server`, que cria uma API completa a partir de um único arquivo JSON, sem precisar escrever nenhuma linha de código de servidor.

-----

### 🚨 **Endereços da API para Usar no Projeto**

Para garantir que todos estejam trabalhando com a mesma base de dados e possam acessar o projeto de qualquer lugar, a API foi disponibilizada em dois endereços de rede. **Use estes endereços em seu código Vue.**

* **API para acesso de DENTRO do IFPE:**

  > `http://172.16.36.31:5000`

* **API para acesso de FORA do IFPE (de casa, etc.):**

  > `http://200.133.17.234:5000`

**Exemplo de uso no seu `app.js`:**

```javascript
const API_URL = 'http://172.16.36.31:5000'; // Ou o IP externo

// ... seu código Vue ...

methods: {
    async carregarClientes() {
        const response = await fetch(`${API_URL}/clientes`);
        // ...
    }
}
```

---

### API Local

Se você quiser subir a API na sua própria máquina, você pode instalar o json-server e usar o db.json.

### O que é o `json-server`?

É um pacote Node.js que permite criar uma API REST "fake" em segundos. Ele é ideal para desenvolvedores frontend que precisam de um backend funcional para construir e testar suas aplicações antes que a API definitiva esteja pronta. Ele automaticamente cria todas as rotas padrão (`GET`, `POST`, `PUT`, `DELETE`, etc.) para os recursos que definirmos.

### `db.json` Completo do Projeto

Este é o arquivo que servirá como nosso banco de dados. Ele contém todos os recursos necessários para o projeto de logística, com alguns dados de exemplo para você começar a testar.

**Copie e cole este conteúdo em um arquivo chamado `db.json` na raiz do seu projeto.**

```json
{
  "clientes": [
    {
      "id": 1,
      "nome": "Empresa de Tecnologia LTDA",
      "cpfCnpj": "12345678000190",
      "email": "contato@tecnologia.com",
      "endereco": "Rua da Inovação, 123, Recife/PE"
    },
    {
      "id": 2,
      "nome": "Maria Silva",
      "cpfCnpj": "12345678901",
      "email": "maria.silva@email.com",
      "endereco": "Avenida Boa Viagem, 456, Recife/PE"
    }
  ],
  "encomendas": [
    {
      "id": 101,
      "peso": 5.5,
      "tipo": "caixa",
      "descricao": "Peças de computador",
      "endereco_entrega": "Rua do Futuro, 789, Olinda/PE"
    },
    {
      "id": 102,
      "peso": 0.2,
      "tipo": "documento",
      "descricao": "Contrato confidencial",
      "endereco_entrega": "Rua da Aurora, 101, Recife/PE"
    }
  ],
  "centros": [
    {
      "id": "cd-rec",
      "nome": "Centro de Distribuição Recife",
      "endereco": "BR-101, Km 80, Recife/PE",
      "cidade": "Recife"
    },
    {
      "id": "cd-cbt",
      "nome": "Centro de Distribuição Caruaru",
      "endereco": "BR-232, Km 130, Caruaru/PE",
      "cidade": "Caruaru"
    }
  ],
  "rotas": [
    {
      "id": "rota-01",
      "origem": "Recife",
      "destino": "Caruaru",
      "distancia_km": 135,
      "tempo_estimado_h": 2,
      "centros_intermediarios": []
    },
    {
      "id": "rota-02",
      "origem": "Recife",
      "destino": "João Pessoa",
      "distancia_km": 120,
      "tempo_estimado_h": 1.5,
      "centros_intermediarios": []
    }
  ],
  "entregas": [
    {
      "id": "ent-001",
      "codigo_rastreamento": "BR123456789PE",
      "clienteId": 1,
      "encomendaId": 101,
      "rotaId": "rota-01",
      "data_estimada": "2025-07-20",
      "status": "a_caminho",
      "historico": [
        {
          "data": "2025-07-11T09:00:00Z",
          "status": "em_preparo",
          "local": "CD Recife"
        },
        {
          "data": "2025-07-11T14:30:00Z",
          "status": "a_caminho",
          "local": "Em trânsito para Caruaru"
        }
      ]
    }
  ]
}
```

-----

### Como Gerar a API Localmente (Opcional)

Embora a API já esteja disponível em um endereço de rede, é muito útil saber como executá-la em sua própria máquina para testes.

#### **Passo 1: Instale o `json-server`**

Se você ainda não o tem, abra seu terminal e execute o seguinte comando. Isso o instalará globalmente em sua máquina.

```bash
npm install -g json-server
```

#### **Passo 2: Inicie o Servidor**

Navegue com o terminal até a pasta onde você salvou o arquivo `db.json` e execute:

```bash
json-server --watch db.json --port 5000
```

* `--watch`: Faz com que o servidor recarregue automaticamente se você fizer alterações no `db.json`.
* `--port 5000`: Define a porta em que o servidor irá rodar.

#### **Passo 3: Verifique os Endpoints**

Se tudo correu bem, o terminal mostrará as rotas que foram criadas para você. Você poderá acessar no seu navegador ou via `fetch`:

* `http://localhost:5000/clientes`
* `http://localhost:5000/encomendas`
* `http://localhost:5000/rotas/rota-01`
* E assim por diante para todos os recursos (`GET`, `POST`, `DELETE`...).

