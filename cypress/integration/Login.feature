Feature: Login

    Background: 
        Given que estou na tela de login do site Seu Barriga 

    Scenario: Login com credenciais validas      
        When insiro credenciais validas
        And clico no botão Entrar
        Then devo ser redirecionado a tela inicial do site

    Scenario: Login com credenciais invalidas        
        When insiro credenciais invalidas
        And clico no botão Entrar
        Then deve ser exibida mensagem de erro no login

