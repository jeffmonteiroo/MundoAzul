
class CadastroParametro {
  
    ApagaParametro(){
        cy.request({
            method: 'GET',
            url: 'https://gateway-dev.unicesumar.edu.br/mundoazul-api-sou-mais/api/parametro-individual?page=0&size=10&idSouMaisCategoria=1&idsSouMaisSubCategoria=3&nrAno=2022&nrModulo=51',
            headers: {
              'Authorization': `Bearer ${Cypress.env('authToken')}`,
            },
          }).then((response) => {
            if (response.status === 200 && response.body.content.length > 0) {
              // Itera pelos registros
              response.body.content.forEach((record) => {
                // Captura o idSouMaisParametroIndividual
                const idParametroIndividual = record.idSouMaisParametroIndividual;
                cy.log(idParametroIndividual);
          
                // Agora você pode usar idParametroIndividual na sua solicitação DELETE
                cy.request({
                  method: 'DELETE',
                  url: `https://gateway-dev.unicesumar.edu.br/mundoazul-api-sou-mais/api/parametro-individual/${idParametroIndividual}`,
                  headers: {
                    'Authorization': `Bearer ${Cypress.env('authToken')}`,
                  },
                }),{ log: false }
              });
            }
          });
    }

    PreencherCampos() {
        cy.wait(2000)
        cy.get('mat-select[formcontrolname="tipoPagamento"]').click();
        cy.get('mat-option').contains('Captação').click();  
        cy.wait(3000)
    
        cy.get('mat-select[formcontrolname="subcategorias"]',{ timeout: 50000 }).click();
        cy.get('mat-option').contains('PROUNI').click();
        cy.get('mat-select[formcontrolname="subcategorias"]').type('{esc}');
       
        //cy.wait(2000)
        cy.get('mat-select[formcontrolname="ano"]',{ timeout: 50000 }).click();
        cy.get('mat-option').contains('2022').click();  
        cy.get('mat-select[formcontrolname="semestre"]').click();
        cy.get('mat-option').contains('51').click();  
    }

    ClickAddParametro(){
        cy.contains('Adicionar Parâmetros',{ timeout: 20000 }).click();
    }

    ClickSalvarParametro(){
        cy.contains('Salvar',{ timeout: 20000 }).click();
    }
    ValidaMsgSucesso(){
            cy.get('.mat-simple-snackbar').should('be.visible');
            cy.get('.mat-simple-snackbar').should('contain.text', 'Registro criado com sucesso');
          }    
  }
  
  export default new CadastroParametro();
  