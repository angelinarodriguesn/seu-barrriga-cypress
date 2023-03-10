Feature: Cadastro

    Background: 
        Given que estou na tela inicial do site Seu Barriga

    Scenario: Cadastro com credenciais validas    
        When clico no menu novo usuario
        And preencho campos com credenciais validas 
        And clico no botao cadastrar
        Then deve ser exibida mensagem de cadastro com sucesso 

    Scenario: Cadastro com credenciais invalidas      
        When clico no menu novo usuario
        And preencho campos com credenciais invalidas
        And clico no botao cadastrar
        Then deve ser exibida mensagem de erro ao cadastrar  