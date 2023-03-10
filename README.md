# Projeto de automação Web com Cypress
> Projeto de automação web com Cypress e cucumber

### ✨  Instalação 
-----------------------

* Instale o [Node.js](https://nodejs.org/en/download/)3

* Clone o repositório

* No diretório execute o comando ```npm install```
* Instale o Cypress com Cucumber com o comando ``` npm install --save-dev cypress@9.1.1 cypress-cucumber-preprocessor```

* Use o comando ```npx cypress open``` para rodar os testes no modo interativo ou ```npm run test:chrome``` para rodar no modo headless


### ⚙️ Arquitetura do projeto
-----------------------

```
  ├─  cypress/
  │        │
  │        ├── fixtures/
  │        │   ├── *.json  │        
  │        │
  │        ├── integration/
  │        │   ├── <Features>/
  │        │   │   └── <categoria>.feature
  │        │
  │        ├── plugins/
  │        │   └── index.js
  │        │
  │        ├── support/
  │        │   ├── elements
  │        │       └── <categoria>Elements.js
  │        │   ├── pageobjects
  │        │       └── <categoria>Pages.js
  │        │   ├── steps
  │        │       └── <categoria>Steps.js
  │        │   └── commands.js
  │        │   └── index.js
  │ 
  ├── cypress.json
  ├── package.json
  └── README.md
```
---------------------------------------
## 🔍 Camadas da arquitetura

 - **fixtures:** arquivos para massa de dados estática para os testes (csv, png, xlsx, txt);
 - **integration:** arquivos contendo as definições de BDD em extensão *.feature;
 - **plugins:** plugins que são utilizados na solução ficam dentro do arquivo "plugins/index.js";
 - **support:** camadas com as divisões modulares para auxiliar na legibilidade dos cenários:
    - elements contém todos os mapeamentos para reconhecimento dos componentes do front;
    - pageobjects contém a modularização de todas as funções que serão adotadas para efetivar a validação;
    - steps contém a conexão entre a definição do BDD na *.feature e as chamdas para efetivação da validação com os *Pages.js;
 - **cypress.json:** arquivo de configuração do Cypress;
 - **package.json:** documento que comporta as configurações necessárias para execução do projeto;
  
  
  
  
