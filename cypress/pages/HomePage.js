
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

    Comercial(){
        cy.contains('Comercial',{ timeout: 50000 }).click()   
    }
    SouMais(){
        cy.contains('SM',{ timeout: 50000 }).click()   
    }
    Individual(){
        cy.contains('Individual',{ timeout: 50000 }).click()   
    }


    
  }
  
  export default new HomePage();