
class CadastroAtividadeES {

    FormularioIdentificacao(){
        cy.contains('Cadastrar Atividade Extensionista').click() 
        cy.get('#mat-input-5').type('Nome Atividade teste 1', {force: true});
        //cy.get('[formcontrolname="modalidadeExtensao"]').click();
        cy.wait(2000)
        cy.get('[formcontrolname="modalidadeExtensao"]').should('be.visible').click({force: true})   
        cy.contains('EVENTOS').should('be.visible').click() 
        cy.wait(1000)

        cy.get('[formcontrolname="submodalidade"]').should('be.visible').click()   
        cy.contains('Congresso').should('be.visible').click() 
        cy.wait(1000)

        
        cy.get('[formcontrolname="modalidadeOferta"]').should('be.visible').click();
        cy.contains('EAD - GRADUAÇÃO').should('be.visible').click() 
        cy.contains('EAD - PÓS-GRADUAÇÃO').should('be.visible').click() 
        cy.contains('EAD - PROFISSIONALIZANTE').should('be.visible').click()

        cy.get('[formcontrolname="modalidadeOferta"]').should('be.visible').click({ force: true });
        

        cy.get('[formcontrolname="instituicaoProponente"]').should('be.visible').click({ force: true })   
        cy.contains('UNICESUMAR').should('be.visible').click() 

    
        cy.wait(2000)

        cy.get('[formcontrolname="cursoPropositor"]').should('be.visible').click({ force: true })  

        cy.get('[placeholder="Pesquise o curso..."]').should('be.visible').type('Testamento')   
        cy.contains('(EAD - PÓS-GRADUAÇÃO) ESTUDOS BÍBLICOS NO NOVO TESTAMENTO').should('be.visible').click({ force: true }) 
      
     

        cy.get('[formcontrolname="ods"]').should('be.visible').click({ force: true })   
        cy.contains('1 - Erradicação da pobreza').should('be.visible').click({ force: true }) 
        cy.contains('2 - Fome zero e agricultura sustentável').should('be.visible').click({ force: true }) 
        cy.contains('3 - Saúde e bem-estar').should('be.visible').click({ force: true }) 
        cy.contains('4 - Educação de qualidade').should('be.visible').click({ force: true })
    
        cy.wait(2000)

        cy.get('[formcontrolname="areaConhecimento"]').should('be.visible').click({ force: true })  
        cy.contains('Ciências Sociais, Comunicação e Informação').should('be.visible').click({ force: true }) 
        
        cy.get('[formcontrolname="vinculoAtividadeCurso"]').should('be.visible').click({ force: true })  
        cy.get('[ id="mat-input-15"]').should('be.visible').type('mba em co')   
        cy.contains('(EAD - PÓS-GRADUAÇÃO) MBA EM COACHING APLICADO À GESTÃO DE PESSOAS').should('be.visible').click() 
        cy.contains('(EAD - PÓS-GRADUAÇÃO) MBA EM COACHING COM ÊNFASE EM MENTORING PARA GESTÃO DE PESSOAS').should('be.visible').click() 
       
        cy.contains('Identificação').should('be.visible').click() 
          
        cy.get('[ id="mat-input-15"]').should('be.visible').type('econo')   
        cy.contains('(EAD - GRADUAÇÃO) BIBLIOTECONOMIA').should('be.visible').click() 
        cy.contains('(EAD - PÓS-GRADUAÇÃO) MBA EXECUTIVO EM ECONOMIA CRIATIVA, CULTURA E INOVAÇÃO').should('be.visible').click() 
       
        cy.contains('Identificação').should('be.visible').click() 
        cy.get('[formcontrolname="competenciaProfissiografica"]').should('be.visible').click()   
        cy.contains('Adaptação').should('be.visible').click() 
        cy.contains('Ética').should('be.visible').click() 
        cy.contains('Pensamento Crítico').should('be.visible').click() 


        cy.contains('Identificação').should('be.visible').click() 
        cy.get('[formcontrolname="pessoasImpactadas"]').should('be.visible').type('100')  
        
        cy.get('[id="mat-radio-3-input"]').should('be.visible').click()  
        
        

        cy.get('[formcontrolname="dtInicioAtividade"]').should('be.visible').type('01/08/2023')  
        cy.get('[formcontrolname="dtFimAtividade"]').should('be.visible').type('30/08/2023')  


    }

}
  
  export default new CadastroAtividadeES();