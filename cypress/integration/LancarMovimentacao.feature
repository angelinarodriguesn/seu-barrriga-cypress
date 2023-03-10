Feature: Lancar Movimentacao

    Background: 
        Given que estou na tela inicial do site

    Scenario: Lancar movimentaçao valida    
        When clico no menu criar movimentacao
        And preencho todos os campos
        And clico em salvar
        Then deve ser exibida mensagem de sucesso ao adicionar movimentacao

    Scenario: Lancar movimentaçao invalida    
        When clico no menu criar movimentacao
        And preencho campos deixando datas em branco
        And clico em salvar
        Then deve ser exibida mensagem de erro de campos obrigatorios

    Scenario: Lancar movimentacao com formato de data incorreta 
        When clico no menu criar movimentacao
        And preencho campos deixando datas com formato incorreto    
        And clico em salvar   
        Then deve ser exibida mensagem de erro de data invalido

     Scenario: Lançar movimentacao com data futura
        When clico no menu criar movimentacao
        And preencho campos deixando datas movitenção com data futura 
        And clico em salvar      
        Then deve ser exibida mensagem de erro de data futura