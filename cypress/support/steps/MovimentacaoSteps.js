/* global Given, Then, When */
import MovimentacaoPage from '../pageobjects/MovimentacaoPage'
const movimentacaoPage = new MovimentacaoPage

Given("que estou logado na tela inicial de contas", () => {
    movimentacaoPage.telaInicio()
})

When("clico no menu contas", () => {
    movimentacaoPage.clicarmenuContas()
})

And("clico submenu Listar", () => {
    movimentacaoPage.listarContas()
})

And("clico no icone de exclusão de uma conta com movimentacao", () => {
    movimentacaoPage.excluircontaMovimentacao()
})

Then("deve ser exibida mensagem de erro ao tentar excluir conta", () => {
    movimentacaoPage.mensagemerroExclusao()
})

And("clico submenu Adicionar", () => {
    movimentacaoPage.submenuAdicionar()
})

And("insiro nome de conta já existente", () => {
    movimentacaoPage.adicionarContas()
})  

Then("deve ser exibida mensagem de erro ao tentar inserir conta com mesmo nome", () => {
    movimentacaoPage.mensagemerroAdicionar()
})