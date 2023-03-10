/* global Given, Then, When */
import CadastroPage from '../pageobjects/CadastroPage'
const cadastroPage = new CadastroPage

Given("que estou na tela inicial do site Seu Barriga", () => {
    cadastroPage.telaInicial()
})

When("clico no menu novo usuario", () => {
    cadastroPage.clicarBotaoNovoUsuario()
})

And("preencho campos com credenciais validas", () => {
    cadastroPage.preencherCamposValidos()
})

And("clico no botao cadastrar", () => {
    cadastroPage.botaoCadastrar()
})

Then("deve ser exibida mensagem de cadastro com sucesso", () => {
    cadastroPage.mensagemdeSucesso()
})

And("preencho campos com credenciais invalidas", () => {
    cadastroPage.preencherCamposInvalidos()
})

Then("deve ser exibida mensagem de erro ao cadastrar ", () => {
    cadastroPage.mensagemErro()
})

