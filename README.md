# Teste Técnico Front-end - BeTalent

## Sobre o Projeto
Este projeto foi desenvolvido como parte do teste técnico para Front-End da BeTalent. A aplicação exibe uma tabela responsiva que consome dados de uma API simulada via `json-server`.

A tabela permite visualizar informações de usuários, realizar pesquisas e expandir detalhes de cada item de forma responsiva.

## Tecnologias Utilizadas
- **React.js** (com Vite)
- **TypeScript**
- **CSS** (estilização responsiva)
- **json-server** (para simular API local)

## Funcionalidades
- Exibição de uma tabela **responsiva**.
- Design adaptado para **desktop e mobile**.
- Busca dinâmica por **nome, cargo e telefone**.
- Formatação de **datas e telefones** no front-end.
- **Dropdown** que expande detalhes ao clicar (mobile).

## 📌 Requisitos para Rodar o Projeto
Antes de iniciar, certifique-se de ter instalado em sua máquina:
- **Git**
- **Node.js**
- **npm** ou **Yarn**
- **json-server** 

## 🚀 Como Rodar a Aplicação

### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/emilyrizo/Teste-Front-End-BeTalent.git
```

### 2️⃣ Instalar as Dependências

```bash
npm install
# Ou
yarn install
```

### 3️⃣ Rodar o Servidor JSON (API Simulada)
Antes de iniciar o projeto, instale e rode o `json-server` para fornecer os dados:
```bash
cd teste-pratico-frontend

npx json-server --watch db.json
# Ou
yarn json-server db.json
```
A API estará disponível em: http://localhost:3000/employees

### 4️⃣ Iniciar o Projeto
Em paralelo, execute também a aplicação na raiz do projeto:
```bash
npm run dev
# Ou
yarn dev
```

A aplicação estará disponível em: http://localhost:5173

## 

Desenvolvido por **Emily Rizo**.