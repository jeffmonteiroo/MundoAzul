
class CurricularizacaoExtensao {

    CadastroFormulario(){
        cy.contains('Cadastro de Formulários', { timeout: 15000 }).should('be.visible').click();   
      }
  }
  
  export default new CurricularizacaoExtensao();