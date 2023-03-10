/// <reference types="Cypress" />

import MovimentacaoElements from '../elements/MovimentacaoElements'
const movimentacaoElements = new MovimentacaoElements
const url = Cypress.config("baseUrl")

class MovimentacaoPage{
    
    telaInicio(){
        cy.visit(url)
        cy.get(movimentacaoElements.inputEmail()).click().type("angelinarodrigues@teste.com")
        cy.get(movimentacaoElements.inputSenha()).click().type('testeadmin')  
        cy.get(movimentacaoElements.botaoEntrar()).click()
        cy.get(movimentacaoElements.alert()).contains('Bem vindo')
    }
    
    clicarmenuContas(){
        cy.get(movimentacaoElements.menuContas()).click()
    }

    listarContas(){
        cy.get(movimentacaoElements.submenuListar()).click()
    }    

    excluircontaMovimentacao(){
        cy.get(movimentacaoElements.listaContas()).contains('Conta para movimentacoes')
        cy.get(movimentacaoElements.iconExclusao()).click()
    }

    mensagemerroExclusao(){
        cy.get(movimentacaoElements.alert()).contains('Conta em uso na movimentações')
    }        
      
    submenuAdicionar(){
        cy.get(movimentacaoElements.submenuAdcionar()).click()
    }   
    adicionarContas(){       
        
        cy.get(movimentacaoElements.inputnomeConta()).type('Conta Teste')
        cy.get(movimentacaoElements.botaoSalvar()).click()
    }

    mensagemerroAdicionar(){
        cy.get(movimentacaoElements.alert()).contains('Já existe uma conta com esse nome!')
    }    
}
export default MovimentacaoPage;