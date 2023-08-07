
class Login {

 jeffMonteiro(){
    cy.fixture('login.json').then((loginData) => {
        cy.visit('/auth') 
        cy.get('#loginUsuario input').type(loginData.username, {force: true});
        cy.get('#password-input').type(loginData.password, { log: false });
        cy.get('button[id="submit-button"]').should('be.visible').click({force: true})
        cy.wait(10000)
       // cy.contains('Perfil Completo').should('be.visible').click({force: true})
       cy.contains('TI - ITD').should('be.visible').click({force: true}) 
    }
    )}
  }
  
  export default new Login();
  