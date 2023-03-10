/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
   
    telaLogin(){
        cy.visit(url)        
    }

    preencherCamposValidos(){
        cy.get(loginElements.inputEmail()).click().type("angelinarodrigues@teste.com")
        cy.get(loginElements.inputSenha()).click().type('testeadmin')       
    }

    clickBotaoEntrar(){
        cy.get(loginElements.botaoEntrar()).click()       
    }
    
    mensagemSucesso(){
        cy.get(loginElements.alert()).contains('Bem vindo')
    }
   
    preencherCamposInvalidos(){
        cy.get(loginElements.inputEmail()).click().type("email@invalido.com")
        cy.get(loginElements.inputSenha()).click().type('testeinvalido') 
    }

    mensagemnomeErro(){
        cy.get(loginElements.alert()).contains('Problemas com o login do usuário')
    }   
}
export default LoginPage;
