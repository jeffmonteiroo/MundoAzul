class Login {
   usuario_perfil_completo() {
     cy.fixture('login.json').then((loginData) => {
       cy.visit('/auth');
       cy.get('#loginUsuario input').type(loginData.username, { force: true });
       cy.get('#password-input').type(loginData.password, { log: false });
       cy.get('button[id="submit-button"]').should('be.visible').click({ force: true });
       cy.contains('Perfil Completo', { timeout: 40000 }).should('be.visible').click({ force: true });
     });
   }
 
   usuario_perfil_ITD() {
     cy.fixture('login.json').then((loginData) => {
       cy.visit('/auth');
       cy.get('#loginUsuario input').type(loginData.username, { force: true });
       cy.get('#password-input').type(loginData.password, { log: false });
       cy.get('button[id="submit-button"]').should('be.visible').click({ force: true });
       cy.contains('TI - ITD',  { timeout: 40000 }).should('be.visible').click({ force: true });
     });
   }
 }
 
 export default new Login();
 