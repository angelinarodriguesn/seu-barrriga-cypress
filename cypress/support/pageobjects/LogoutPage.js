/// <reference types="Cypress" />

import LogoutElements from '../elements/LogoutElements'
const logoutElements = new LogoutElements
const url = Cypress.config("baseUrl")


class LogoutPage {
   
    telaLogin(){
        cy.visit(url)
        cy.get(logoutElements.inputEmail()).click().type("angelinarodrigues@teste.com")
        cy.get(logoutElements.inputSenha()).click().type('testeadmin')  
        cy.get(logoutElements.botaoEntrar()).click()
        cy.get(logoutElements.alert()).contains('Bem vindo')     
    }

    botaoSair(){
        cy.get(logoutElements.botaoSair()).click()
    }

    incio(){
        cy.get(logoutElements.titleEmail()).contains('Email')
    }
}
export default LogoutPage;