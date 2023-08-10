import faker from 'faker-br';
var cpf = require('gerador-validador-cpf')

class AccessControl{
    AcessarControleAcesso(){
        cy.contains('Controle Acesso').click();    
    }
    
    AcessarUsuarios(){
        cy.contains('US').click();    
    }
    
    Cadastrar(){
        cy.wait(3000)
        cy.contains('Cadastrar').click();    
    }
    
    UsuarioExterno(){
        cy.wait(3000);
        cy.contains('Sim').click();
    }

    AlterarSenha(){
        cy.get('#mat-radio-6 > .mat-radio-label > .mat-radio-label-content').click(); 
    }
    
    PreencheCPF(){
        cy.get('#user-code-input').type(cpf.generate());
    }
    
    ValidaCPF(){
        cy.get('.mat-form-field-suffix > .mat-icon').click();
    }

    MsgCPF(){
        
        cy.wait(3000);
        cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.text','O CPF informado está liberado para uso.');
    }
    
    PreencheNome() {
        cy.get('#name-input').type(faker.name.firstName()+ ' '+ faker.name.lastName());
    }
    
    PreencheEmail(){
        cy.get('#email-input').type('teste@gmail.com');
    }
    
    PreencheSenha(){
        cy.get('#mat-input-12').type('Teste123#');
    }
    
    PreencheDataExpiracao(){
        cy.get('#mat-input-13').type('01/01/2025');
    }

    SalvarCadastro(){
        cy.contains('Salvar', { timeout: 40000 }).click();
    }
    ContinuarEditando(){
        cy.get('#dialog-confirm-button', { timeout: 40000 }).click();
       
    }
    IrParaPerfil(){
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content', { timeout: 40000 }).click();
        
    }
    PesquisaPorPerfil(){
        cy.get('#search-value').type('Perfil Completo', { timeout: 40000 })
        cy.get('#button-search > .mat-button-wrapper > .mat-icon').click()
    }
    AtivarPerfil(){
        cy.get('#mat-slide-toggle-14 > .mat-slide-toggle-label > .mat-slide-toggle-bar > .mat-slide-toggle-thumb-container > .mat-slide-toggle-thumb')
        cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.text','Registro criado com sucesso',  { timeout: 40000 })
    }
}

export default new AccessControl();
