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
        cy.contains('Salvar').click();
        cy.wait(2000)
    }
    ContinuarEditando(){
        cy.get('#dialog-confirm-button').click();
        cy.wait(2000)
    }
    IrParaPerfil(){
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
        cy.wait(2000)
    }
    PesquisaPorPerfil(){
        cy.get('#search-value').type('Perfil Completo')
        cy.get('#button-search > .mat-button-wrapper > .mat-icon').click()
    }
    AtivarPerfil(){
        cy.get('label[for="mat-slide-toggle-14-input"]').click();
        cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.text','Registro criado com sucesso')
    }
}

export default new AccessControl();
