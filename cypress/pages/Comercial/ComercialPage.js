
class Comercial {

    Coletivo(){
      cy.contains('Comercial', { timeout: 90000 }).should('be.visible').click();  
      cy.contains('Sou Mais', { timeout: 90000 }).should('be.visible').click();   
      cy.contains('Coletivo', { timeout: 200000 }).should('be.visible').click();
      }

      Individual(){
        cy.contains('Comercial', { timeout: 20000 }).should('be.visible').click();  
        cy.contains('Sou Mais', { timeout: 20000 }).should('be.visible').click();   
        cy.contains('Individual', { timeout: 20000 }).should('be.visible').click();   
        }
  }

  
  
  export default new Comercial();