Feature: Logout

    Scenario: Encerrar sessão inciada  
        Given que estou logado no site Seu Barriga
        When clico no botao sair 
        Then devo ser deslogado do site
