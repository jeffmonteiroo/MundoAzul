
class HubPage {

  ValidarBreadCrumb(){
    cy.get('app-breadcrumb span[class="f-18 silver-sand"]').eq(0).should('have.text', ' Comercial ');
    cy.get('app-breadcrumb span[class="f-18 silver-sand"]').eq(1).should('have.text', ' Sou Mais ');
    cy.get('app-breadcrumb span[class="f-18 w500 havelock-blue"]').should('have.text', ' Coletivo ');  
      }

  ValidarTitulo(){
    cy.contains('h3', 'Hub - Coletivo').should('be.visible');
        }
  
  ValidarSubtítulo(){
    cy.contains('.subtitle', 'Utilize os atalhos abaixo para acessar funcionalidades respectivas aos cadastros e configurações dos ambientes do Coletivo.', { timeout: 50000 }).should('be.visible');
    }
  
  ValidarTituloCard(){
    cy.contains('.app-card-content-box', 'Checkpoint', { timeout: 90000 }).should('be.visible');
      }
  ValidarDisclaimer(){
    cy.contains('div[class="alert alert-default"] p', 'Esta página existe para auxiliar na organização e navegação de conteúdos referentes a um determinado contexto, indexando a navegação através dos atalhos presentes no topo da tela. Ao acessar uma página através destes atalhos, a página selecionada é carregada e você pode navegar entre as demais conforme sua necessidade.', { timeout: 200000 }).should('be.visible');
      }
            
   ValidarAcessoAmbiente(){
    cy.get('div[class="col-12"] a').invoke('text').should('include', 'Acessar ambiente');
   }   

   AcessarCheckpoint(){
    cy.contains('Checkpoint', { timeout: 50000 }).should('be.visible').click()
    cy.contains('Filtrar Checkpoint', { timeout: 50000 }).should('be.visible');
   }

  }

  
  
  export default new HubPage();