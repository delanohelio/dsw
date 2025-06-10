## 📦 **Projeto de Desenvolvimento Web: Sistema de Logística de Entregas (Frontend)**

### 🎯 **Objetivo Geral**

Desenvolver a **interface web (frontend)** de um sistema de logística, que permita **cadastrar e consultar clientes, encomendas, centros de distribuição, rotas e entregas**, além de possibilitar o **rastreamento das encomendas**. Todo o sistema deve se comunicar com uma **API REST** já disponibilizada.

---

### 🏛️ **Estrutura da Aplicação**

A aplicação deverá ser organizada em três áreas principais:

1.  **Página Inicial:** Uma página simples de boas-vindas com links que direcionam para a "Área Administrativa" e para a "Página de Rastreamento".
2.  **Área Administrativa:** Uma página única (ou uma seção) que centraliza todas as funcionalidades de cadastro e listagem do sistema (clientes, encomendas, rotas e entregas).
3.  **Página de Rastreamento:** Uma tela pública onde qualquer usuário pode buscar pelo status de uma encomenda.

---

## 📐 **Restrições**

* O **backend será fornecido** com endpoints REST documentados.
* Os alunos devem consumir os dados exclusivamente via **requisições HTTP (GET, POST, etc)**.
* A interface deve ser **modular, responsiva e de fácil navegação**.
* Todas as validações devem ocorrer no **frontend**.

---

## ✅ **Funcionalidades Obrigatórias**

### 1. **Área Administrativa**

Esta área deve conter os formulários e as listagens para gerenciar os seguintes recursos:

#### **Clientes**
* **Formulário de Cadastro:** Nome completo, CPF/CNPJ, E-mail, Endereço.
* **Listagem e Filtros:** Listar todos os clientes com filtros por nome e CPF/CNPJ.
* **APIs:** `POST /clientes`, `GET /clientes`

#### **Encomendas**
* **Formulário de Cadastro:** Peso (kg), Tipo (`documento`, `caixa`, `palete`), Descrição, Endereço de entrega.
* **Listagem e Filtros:** Listar todas as encomendas com filtros por tipo e peso.
* **APIs:** `POST /encomendas`, `GET /encomendas`

#### **Rotas de Entrega**
* **Formulário de Cadastro:** Origem, Destino, Centros intermediários (opcional), Distância (km), Tempo estimado (h).
* **Listagem e Filtros:** Listar todas as rotas com filtros por origem e destino.
* **APIs:** `POST /rotas`, `GET /rotas`

#### **Entregas**
* **Formulário de Criação:** Seleção de Cliente, Encomenda e Rota; Data estimada.
* **Listagem e Filtros:** Listar todas as entregas com filtros por cliente, rota, data e status (`em_preparo`, `a_caminho`, `entregue`).
* **APIs:** `POST /entregas`, `GET /entregas`

#### **Centros de Distribuição**
* Apenas a listagem para consulta (será usado no cadastro de rotas).
* **API:** `GET /centros`

---

### 2. **Página de Rastreamento**

* **Comportamento:** Deve permitir que um usuário busque uma entrega e veja seu status atual e o histórico de movimentações (data/hora + novo status).
* **Filtros de Busca:** Por código de rastreamento, por cliente ou por status.
* **API:** `GET /entregas/:id`, `GET /entregas/:id/historico`

---

## ✳️ **Funcionalidades Opcionais**

* **Autenticação de Admin:** Implementar uma forma simples de "login" (pode ser com senha fixa no código e `localStorage`) para proteger o acesso à Área Administrativa.
* **Mapa Interativo da Rota:** Visualizar graficamente a rota da entrega (origem → centros → destino) usando uma biblioteca de mapas (Leaflet.js, Mapbox, etc.).

---

## 🚦 **Etapas de Entrega Incremental (Sugestão Ajustada)**

### 🔹 **Etapa 1 – Estrutura e Rastreamento**
* Criar a estrutura básica com a Página Inicial.
* Implementar a Página de Rastreamento completa, com busca e exibição de histórico.

### 🔹 **Etapa 2 – Admin: Clientes e Encomendas**
* Implementar na Área Administrativa os formulários e listagens para Clientes e Encomendas.
* Garantir que os filtros estejam funcionando.

### 🔹 **Etapa 3 – Admin: Rotas e Entregas**
* Finalizar a Área Administrativa com os formulários e listagens para Rotas e Entregas.
* Garantir que a criação de uma entrega, associando os outros recursos, funcione corretamente.

---

## 📁 **Requisitos de Entrega**

* Código em repositório público (GitHub).
* Projeto funcional e bem documentado.
* Código organizado, com separação clara de HTML, CSS e JS.
* README explicando a estrutura e funcionalidades implementadas.

---

## 🧠 **Competências Desenvolvidas**

* Manipulação de DOM com JavaScript.
* Validação de dados no frontend.
* Consumo de APIs REST (fetch).
* Organização e estruturação de interfaces web.
* Aplicação de conceitos de usabilidade e design responsivo.
* Interação com dados dinâmicos e filtragem.