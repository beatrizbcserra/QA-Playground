# 🧪 **QA Automation Project**

![Cypress Tests](https://github.com/beatrizbcserra/QA-Playground/actions/workflows/cypress.yml/badge.svg)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Last Commit](https://img.shields.io/github/last-commit/beatrizbcserra/QA-Playground)
![Repo Size](https://img.shields.io/github/repo-size/beatrizbcserra/QA-Playground)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

## 📄 Descrição

Projeto de testes manuais e automação E2E utilizando Cypress, simulando o fluxo de cadastro de usuários e login em uma aplicação web utilizando IA Generativa (ChatGPT) para geração de dados de teste no formato JSON.

## 🎯 Objetivo 

Garantir a qualidade da funcionalidade de cadastro e login através de testes automatizados positivos e negativos, simulando cenários reais de validação de dados para o site QAPlayground feito por [Carlos Felix](https://github.com/carlosfelixpenha-create).

## 🧠 Estratégia de Testes 

Foram automatizados cenários baseados em:

✔️ Testes manuais e exploratórios

✔️ Testes de validação de campos obrigatórios

✔️ Testes de regras de requisitos

✔️ Testes de dados inválidos

✔️ Teste de fluxo feliz (happy path)

## 🛠️ Tecnologias Utilizadas

- **Cypress** - Framework de testes E2E
- **JavaScript** - Linguagem de programação
- **Page Object Pattern** - Padrão de organização de código
- **Fixtures** - Gerenciamento de dados de teste
- **GitHub Actions** - CI/CD para automação dos testes

## 🔄 Integração Contínua

Os testes são executados automaticamente via GitHub Actions a cada push, simulando um ambiente real de integração contínua.

![Logo QA Playground](https://carlosfelixpenha-create.github.io/QAPlayground/frontend/img/logos/logo_home.png)

## ▶️ Como Executar

### 1. Clonar o repositório
```bash
git clone https://github.com/beatrizbcserra/QA-Playground.git
cd QA-Playground
```
### 2. Instalar depedências 
```bash
npm install
```
### 3. Executar Testes
Modo iterativo:
```bash
npx cypress open
```
Modo headless:
```bash
npx cypress run
```
## 📁 Estrutura do Projeto

cypress/

 ├── e2e/
 
 │    ├── cadastroPositivo.cy.js
 
 │    └── cadastroNegativo.cy.js
 
 │
 
 ├── fixtures/
 
 │    └── usuarios_teste.json
 
 │
 
 ├── support/
 
 │    ├── commands.js
 
 │    └── pages/
 
 │         └── cadastro.page.js

## ⭐ Destaques do Projeto

- Implementação do padrão **Page Object Model**
- Separação de cenários positivos e negativos
- Uso de **fixtures dinâmicas** para múltiplos cenários
- Integração com **GitHub Actions** para execução automática
- Estrutura voltada para escalabilidade de testes

## 📨 Duvidas ou sugestões? 
[E-mail](mailto:beatrizbcserra@gmail.com)

### Produzido por [Beatriz Serra](https://github.com/beatrizbcserra)

