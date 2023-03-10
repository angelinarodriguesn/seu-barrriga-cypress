/// <reference types="Cypress" />

import LancarMovimentacaoElements from '../elements/LancarMovimentacaoElements'
const lancarMovimentacaoElements = new LancarMovimentacaoElements
const url = Cypress.config("baseUrl")

class LancarMovimentacaoPage {
    
    telaInicial(){
        cy.visit(url)
        cy.get(lancarMovimentacaoElements.inputEmail()).click().type("angelinarodrigues@teste.com")
        cy.get(lancarMovimentacaoElements.inputSenha()).click().type('testeadmin')  
        cy.get(lancarMovimentacaoElements.botaoEntrar()).click()
        cy.get(lancarMovimentacaoElements.alert()).contains('Bem vindo')       
    }
   
    menucriarMovimentacao(){
        cy.get(lancarMovimentacaoElements.menucriarMovimentacao()).click()
    }

    preenchercamposValidos(){
        cy.get(lancarMovimentacaoElements.dataMovimentacao()).type('09/03/2023')
        cy.get(lancarMovimentacaoElements.dataPagamento()).type('15/03/2023')
        cy.get(lancarMovimentacaoElements.descricao()).type('teste movimentação valida')
        cy.get(lancarMovimentacaoElements.interessado()).type('teste')
        cy.get(lancarMovimentacaoElements.valor()).type('1000')
        cy.get(lancarMovimentacaoElements.checkboxPago()).click()        
    }

    clickSalvar(){
        cy.get(lancarMovimentacaoElements.botaoEntrar()).click()
    }

    mensagemmovimentacaoSucesso(){
        cy.get(lancarMovimentacaoElements.alert()).contains('Movimentação adicionada com sucesso!')
    }
    
    preenchercampossemData(){
        cy.get(lancarMovimentacaoElements.descricao()).type('teste movimentação sem campo data')
        cy.get(lancarMovimentacaoElements.interessado()).type('teste')
        cy.get(lancarMovimentacaoElements.valor()).type('1000')
        cy.get(lancarMovimentacaoElements.checkboxPago()).click()
    }

    mensagemmovimentacaoErro(){
        cy.get(lancarMovimentacaoElements.alert()).contains('Data da Movimentação é obrigatório')
    }

    preenchercamposDataInvalida(){
        cy.get(lancarMovimentacaoElements.dataMovimentacao()).type('09.03.2023')
        cy.get(lancarMovimentacaoElements.dataPagamento()).type('15/03/2023')
        cy.get(lancarMovimentacaoElements.descricao()).type('teste movimentação formato data invalida')
        cy.get(lancarMovimentacaoElements.interessado()).type('teste')
        cy.get(lancarMovimentacaoElements.valor()).type('1000')
        cy.get(lancarMovimentacaoElements.checkboxPago()).click()
        cy.get(lancarMovimentacaoElements.botaoEntrar()).click()
    }
   
    mensagemdataInvalida(){
        cy.get(lancarMovimentacaoElements.alert()).contains('Data da Movimentação inválida (DD/MM/YYYY)')
    }

    preenchercamposDataFutura(){
        cy.get(lancarMovimentacaoElements.dataMovimentacao()).type('15/03/2023')
        cy.get(lancarMovimentacaoElements.dataPagamento()).type('15/03/2023')
        cy.get(lancarMovimentacaoElements.descricao()).type('teste movimentação data futura')
        cy.get(lancarMovimentacaoElements.interessado()).type('teste')
        cy.get(lancarMovimentacaoElements.valor()).type('1000')
        cy.get(lancarMovimentacaoElements.checkboxPago()).click()
        cy.get(lancarMovimentacaoElements.botaoEntrar()).click()
    }    

    mensagemdataFuturaErro(){
        cy.get(lancarMovimentacaoElements.alert()).contains('Data da Movimentação deve ser menor ou igual à data atual')
    }
}
export default LancarMovimentacaoPage;