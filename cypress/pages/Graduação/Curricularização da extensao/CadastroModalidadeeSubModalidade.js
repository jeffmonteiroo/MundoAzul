
class CadModalidadeSubModalidade {

    CliqueCadModSubmod(){
        cy.contains('Cadastro de Modalidade e Sub Modalidade', { timeout: 50000 }).should('be.visible').click(); 
        cy.wait(3000)    
    }

    FormularioModalidade(){
        cy.contains('Cadastrar Modalidade', { timeout: 20000 }).should('be.visible').click();     
        cy.get('#modalidade').should('be.visible').type('Teste Modalidade');
        cy.get('#CH').type(100);
        cy.get('.mat-icon.notranslate.addButton.material-icons.mat-icon-no-color').click();
    }

    FormularioSubModalidade(){  
        cy.get('input[id="mat-input-5"]').should('be.visible').type('Teste Submodalide');
        cy.get('##mat-input-6').type('Descrição submodalidade');
        cy.get('#mat-input-7').type(10);
        cy.get('#mat-input-8').type(50);
       // cy.get('.mat-form-field-infix.ng-tns-c92-26').click(); 
    }
}
  
  export default new CadModalidadeSubModalidade();