/* global Given, Then, When */
import LancarMovimentacaoPage from '../pageobjects/LancarMovimentacaoPage'
const lancarMovimentacaoPage = new LancarMovimentacaoPage

Given("que estou na tela inicial do site", () => {
    lancarMovimentacaoPage.telaInicial()
})

When("clico no menu criar movimentacao", () => {
    lancarMovimentacaoPage.menucriarMovimentacao()
})

And("preencho todos os campos", () => {
    lancarMovimentacaoPage.preenchercamposValidos()
})

And("clico em salvar", () => {
    lancarMovimentacaoPage.clickSalvar()
})

Then("deve ser exibida mensagem de sucesso ao adicionar movimentacao", () => {
    lancarMovimentacaoPage.mensagemmovimentacaoSucesso()
})

And("preencho campos deixando datas em branco", () => {
    lancarMovimentacaoPage.preenchercampossemData()
})

Then("deve ser exibida mensagem de erro de campos obrigatorios", () => {
    lancarMovimentacaoPage.mensagemmovimentacaoErro()
})

And("preencho campos deixando datas com formato incorreto", () => {
    lancarMovimentacaoPage.preenchercamposDataInvalida()
})

Then("deve ser exibida mensagem de erro de data invalido", () => {
    lancarMovimentacaoPage.mensagemdataInvalida()
})

And("preencho campos deixando datas movitenção com data futura", () => {
    lancarMovimentacaoPage.preenchercamposDataFutura()
})
     
Then("deve ser exibida mensagem de erro de data futura", () => {
    lancarMovimentacaoPage.mensagemdataFuturaErro()
})