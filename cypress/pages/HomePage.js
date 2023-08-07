
class HomePage {

    Home(){
        cy.contains('Comum').click()  
    }

    Comum(){
        cy.contains('Comum').click()   
    }
    ControleAcesso(){
        cy.wait(5000)
        cy.contains('Controle Acesso').click()   
    }
    GestaoRedePolo(){
        cy.contains('Gestao Rede/Polo').click()   
    }
    Graduacao(){
        cy.contains('Graduação').click()   
    }
    CurricularizacaoExtensao(){
        cy.contains('Graduação').click() 
        cy.contains('Curricularização da Extensão').click()    
    }
    
    CadastroFormulario(){
        cy.contains('Graduação').click()
        cy.wait(2000)
        cy.contains('Curricularização da Extensão').should('be.visible').click() 
        cy.wait(5000)
        cy.contains('Cadastro de Formulários').should('be.visible').click()    
    }

    
  }
  
  export default new HomePage();