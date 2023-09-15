
class hub {

    Processamentos(){
        cy.contains('Processamentos', { timeout: 20000 }).should('be.visible').click();  
        }
        
      LancamentosManuis(){
        cy.contains('Lançamentos Manuais', { timeout: 20000 }).should('be.visible').click();  
        }
        
      Parametros(){
        cy.wait(4000)
        cy.get('.col-12.app-card-content-box', { timeout: 20000 })
        .eq(2) // Seleciona o terceiro elemento (o índice começa em 0)
        .click();
      
      
        }
        
        ParametrosRetencao(){
        cy.get('.col-12.app-card-content-box',{ timeout: 20000 })
        .eq(3).click();

        }
        
  }

  
  
  export default new hub();