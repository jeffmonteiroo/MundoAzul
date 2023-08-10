
class Graduacao {

    CurricularizacaoExtensao(){
        cy.contains('Curricularização da Extensão', { timeout: 20000 }).click()    
    }
  }
  
  export default new Graduacao();