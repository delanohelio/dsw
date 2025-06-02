## 📦 **Projeto de Desenvolvimento Web: Sistema de Logística de Entregas (Frontend)**

### 🎯 **Objetivo Geral**

Desenvolver a **interface web (frontend)** de um sistema de logística, que permita **cadastrar e consultar clientes, encomendas, centros de distribuição, rotas e entregas**, além de possibilitar o **rastreamento das encomendas**. Todo o sistema deve se comunicar com uma **API REST** já disponibilizada.

---

## 📐 **Restrições**

* O **backend será fornecido** com endpoints REST documentados.
* Os alunos devem consumir os dados exclusivamente via **requisições HTTP (GET, POST, etc)**.
* A interface deve ser **modular, responsiva e de fácil navegação**.
* Todas as validações devem ocorrer no **frontend**.

---

## ✅ **Funcionalidades Obrigatórias**

### 1. **Cadastro e Listagem de Clientes**

#### Campos:

| Campo         | Tipo  | Validações                                          |
| ------------- | ----- | --------------------------------------------------- |
| Nome completo | Texto | Obrigatório, mínimo 3 caracteres                    |
| CPF/CNPJ      | Texto | Obrigatório, deve ter 11 (CPF) ou 14 (CNPJ) dígitos |
| E-mail        | Texto | Obrigatório, formato de e-mail válido               |
| Endereço      | Texto | Obrigatório, mínimo 5 caracteres                    |

#### API:

* `POST /clientes`
* `GET /clientes`

#### Filtros:

* Por **nome**
* Por **CPF/CNPJ**

---

### 2. **Cadastro e Listagem de Encomendas**

#### Campos:

| Campo               | Tipo   | Validações                                                |
| ------------------- | ------ | --------------------------------------------------------- |
| Peso (kg)           | Número | Obrigatório, maior que 0                                  |
| Tipo                | Texto  | Obrigatório, opções: `"documento"`, `"caixa"`, `"palete"` |
| Descrição           | Texto  | Opcional, até 200 caracteres                              |
| Endereço de entrega | Texto  | Obrigatório, mínimo 5 caracteres                          |

#### API:

* `POST /encomendas`
* `GET /encomendas`

#### Filtros:

* Por **tipo**
* Por **peso mínimo/máximo**

---

### 3. **Cadastro e Listagem de Centros de Distribuição**

#### Campos:

| Campo    | Tipo  | Validações                       |
| -------- | ----- | -------------------------------- |
| Nome     | Texto | Obrigatório, mínimo 3 caracteres |
| Endereço | Texto | Obrigatório, mínimo 5 caracteres |
| Cidade   | Texto | Obrigatório                      |

#### API:

* `GET /centros` (somente leitura no frontend)

---

### 4. **Cadastro e Listagem de Rotas**

#### Estrutura:

Uma **rota de entrega** deve conter:

* **Origem:** cidade ou centro de distribuição (obrigatório)
* **Centros intermediários:** lista de centros de distribuição (opcional)
* **Destino final:** cidade (obrigatório)
* **Distância total estimada (km):** (calculada ou informada)
* **Tempo estimado (em horas):** (opcional)

#### Campos:

| Campo                  | Tipo           | Validações                 |
| ---------------------- | -------------- | -------------------------- |
| Origem                 | Texto/Select   | Obrigatório                |
| Centros intermediários | Lista (Select) | Opcional                   |
| Destino                | Texto          | Obrigatório                |
| Distância (km)         | Número         | Obrigatório, > 0           |
| Tempo estimado (h)     | Número         | Opcional, se fornecido > 0 |

#### API:

* `POST /rotas`
* `GET /rotas`

#### Filtros:

* Por **origem**
* Por **centro intermediário** (verificar se a rota passa por um centro)
* Por **destino**

---

### 5. **Criação e Listagem de Entregas**

#### Composição da Entrega:

* Cliente
* Encomenda
* Rota
* Data estimada de entrega
* Status (opcional na criação)

#### Campos:

| Campo         | Tipo   | Validações                           |
| ------------- | ------ | ------------------------------------ |
| Cliente       | Select | Obrigatório                          |
| Encomenda     | Select | Obrigatório                          |
| Rota          | Select | Obrigatório                          |
| Data estimada | Data   | Obrigatório, não pode ser no passado |

#### API:

* `POST /entregas`
* `GET /entregas`

#### Filtros:

* Por **cliente**
* Por **rota**
* Por **data estimada**
* Por **status** (`em_preparo`, `a_caminho`, `entregue`)

---

### 6. **Rastreamento de Entregas**

#### Comportamento:

* Exibição do status atual da entrega
* Exibição de **histórico de movimentações** (data/hora + novo status)

#### API:

* `GET /entregas/:id`
* `GET /entregas/:id/historico`

#### Filtros:

* Por **código de rastreamento**
* Por **cliente**
* Por **status**

---

## ✳️ **Funcionalidade Extra (Opcional): Mapa Interativo da Rota**

**Objetivo:** Visualizar graficamente a rota da entrega (origem → centros intermediários → destino) usando um mapa (Leaflet.js, Mapbox ou Google Maps Embed API).

#### Funcionalidades:

* Marcar origem, centros e destino no mapa
* Traçar visualmente a linha da rota
* Mostrar distância e tempo estimado

---

## 🚦 **Etapas de Entrega Incremental**

### 🔹 **Etapa 1 – Clientes e Encomendas**

* Formulários com validação
* Comunicação com API para salvar e listar
* Filtros funcionais

### 🔹 **Etapa 2 – Rotas e Entregas**

* Cadastro de rotas com centros intermediários opcionais
* Seleção de cliente, encomenda e rota para criar entrega
* Listagem com filtros

### 🔹 **Etapa 3 – Rastreamento**

* Tela para buscar e exibir status atual e histórico da entrega
* Filtros e busca por código ou cliente

---

## 📁 **Requisitos de Entrega**

* Código em repositório público (GitHub)
* Projeto funcional e bem documentado
* Código organizado, com separação clara de HTML, CSS e JS
* README explicando a estrutura e funcionalidades implementadas.

---

## 🧠 **Competências Desenvolvidas**

* Manipulação de DOM com JavaScript
* Validação de dados no frontend
* Consumo de APIs REST (fetch)
* Organização e estruturação de interfaces web
* Aplicação de conceitos de usabilidade e design responsivo
* Interação com dados dinâmicos e filtragem
