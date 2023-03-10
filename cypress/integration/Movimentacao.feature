Feature: Movimentacao

    Background: 
        Given que estou logado na tela inicial de contas

    Scenario: Exclusao de conta com movimentacao      
        When clico no menu contas
        And clico submenu Listar  
        And clico no icone de exclusão de uma conta com movimentacao
        Then deve ser exibida mensagem de erro ao tentar excluir conta  

     Scenario: Inserindo conta com o mesmo nome    
        When clico no menu contas
        And clico submenu Adicionar  
        And insiro nome de conta já existente
        Then deve ser exibida mensagem de erro ao tentar inserir conta com mesmo nome