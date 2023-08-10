
class HubCE {

  CadFormulario(){
      cy.contains(' Cadastro de Formulários ',{ timeout: 20000 }).click()  
  }
  CadModalidadeSubmModalidade(){
      cy.contains(' Cadastro de Modalidade e Sub Modalidade ',{ timeout: 20000 }).click()  
  }
  AtivExtSolicitante(){
      cy.contains(' Atividade Extensionista Solicitante ',{ timeout: 20000 }).click()  
  }
  AtivAprovador(){
      cy.contains(' Atividade Extensionista Aprovador ',{ timeout: 20000 }).click()  
  }
  FormComprovacao(){
      cy.contains(' Formulário de Comprovação ',{ timeout: 20000 }).click()  
  }
}

export default new HubCE();