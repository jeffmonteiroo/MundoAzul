
class CadastroFormulario {

    CliqueCadForm(){
        cy.contains('Cadastrar Formulário').click()  
    }

    FormularioTeste(){
        cy.get('#mat-input-3').should('be.visible').type('Formulário teste', {force: true});
        cy.get('mat-select[formcontrolname="modalidadeExtensao"]').click({force: true})
        cy.get('mat-option').contains('Modalidade 1').click({force: true});
        cy.get('input').type('{esc}',{force: true})
        cy.get('mat-select[formcontrolname="subModalidades"]').click({force: true})
        cy.get('mat-option').contains('Submodalidalidade 1').click({force: true});
                

    }

}
  
  export default new CadastroFormulario();