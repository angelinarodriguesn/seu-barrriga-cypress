/* global Given, Then, When */
import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que estou na tela de login do site Seu Barriga", () => {
    loginPage.telaLogin()
})

When("insiro credenciais validas", () => {
    loginPage.preencherCamposValidos()
})

And("clico no botão Entrar", () => {
    loginPage.clickBotaoEntrar()
})

Then("devo ser redirecionado a tela inicial do site", () => {
    loginPage.mensagemSucesso()
})
 
When("insiro credenciais invalidas", () => {
   loginPage.preencherCamposInvalidos()
})

Then("deve ser exibida mensagem de erro no login", () => {
    loginPage.mensagemnomeErro()
})
