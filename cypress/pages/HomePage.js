
class HomePage {

    Home(){
        cy.contains('Comum').click()  
    }

    Comum(){
        cy.contains('Comum').click()   
    }
    ControleAcesso(){
        cy.contains('Controle Acesso',{ timeout: 50000 }).click()   
    }
    GestaoRedePolo(){
        cy.contains('Gestao Rede/Polo',{ timeout: 40000 }).click()   
    }
    Graduacao(){
        cy.contains('Graduação', { timeout: 40000 }).click()   
    }
    
  }
  
  export default new HomePage();