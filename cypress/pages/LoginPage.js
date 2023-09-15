


class Login {

LoginUser() {
  cy.fixture('login.json').then((loginData) => {
    cy.visit('/auth');
    cy.get('#loginUsuario input').type(loginData.username, { force: true });
    cy.get('#password-input').type(loginData.password, { log: false });
    cy.get('button[id="submit-button"]').should('be.visible').click({ force: true });
    cy.wait(5000);

   
    cy.request({
      method: 'POST',
      url: 'https://gateway-dev.unicesumar.edu.br/mundoazul-api-controle-acesso/oauth/token',
      headers: {
        'Accept': '*/*',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'Authorization': 'Basic TVVORE9fQVpVTDplbXRlcnJhZGVzYWNpcXVlbXRlbTFvbGhvZXJlaUB1bmljZXN1bWFyLmVkdS5icg==',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://mundoazul-dev.unicesumar.edu.br',
        'Referer': 'https://mundoazul-dev.unicesumar.edu.br/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
      form: true, 
      body: {
        username: loginData.username,
        password: loginData.password,
        grant_type: 'password',
      },
    }).then((response) => {
      if (response.status === 200 && response.body.access_token) {
        
        Cypress.env('authToken', response.body.access_token);
      }
    });

    // Continue com suas ações após o login na automação web
  });
}





PerfilProcessoQualidade(){
  cy.get('#perfil_46 > .mat-card-footer > .btnCard', { timeout: 90000 }).click()
}

PerfilServicoAdmPolos(){
    cy.get('#search-value').type('SERVIÇOS ADMINISTRATIVOS DE POLOS', { timeout: 90000 }).click()
}

PerfilGSAP(){
    cy.get('#search-value').type('GESTÃO SERVIÇOS ADMINISTRATIVOS DE POLOS ', { timeout: 90000 }).click()
}
ProcessoProjetos(){
    cy.contains('Processo/Projetos', { timeout: 90000 }).click()
}
 
Perfil_ITD() {
    cy.contains('TI - ITD',  { timeout: 99000 }).should('be.visible').click({ force: true });
   }

Perfil_Completo() {
  cy.contains('Perfil Completo',  { timeout: 99000 }).should('be.visible').click({ force: true });
   }

  }
 
 export default new Login();
 