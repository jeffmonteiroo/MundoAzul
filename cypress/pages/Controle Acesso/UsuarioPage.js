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
        cy.get('input[formcontrolname="cdSenha"]').type('Teste123#');
    }
    
    PreencheDataExpiracao(){
        cy.get('input[formcontrolname="dtValidadeSenha"]').type('01/01/2025');
    }

    SalvarCadastro(){
        cy.contains('Salvar', { timeout: 40000 }).click();
    }
    ValidaMsg(){
        cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.text','Registro criado com sucesso',  { timeout: 40000 })
        cy.wait(4000)
    }

    ContinuarEditando(){
        cy.get('#dialog-confirm-button', { timeout: 40000 }).click();
       
    }
    IrParaPerfil(){
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content', { timeout: 40000 }).click();
        
    }
    PesquisaPorPerfilCompleto(){
        cy.get('#search-value').type('Perfil Completo', { timeout: 40000 })
        cy.get('#button-search > .mat-button-wrapper > .mat-icon').click()
    }

    PerfilProcessoQualidade(){
        cy.get('#search-value').type('PROCESSOS E QUALIDADE', { timeout: 40000 })
        cy.get('#button-search > .mat-button-wrapper > .mat-icon').click()
    }

    PerfilServicoAdmPolos(){
        cy.get('#search-value').type('SERVIÇOS ADMINISTRATIVOS DE POLOS', { timeout: 40000 })
        cy.get('#button-search > .mat-button-wrapper > .mat-icon').click()
    }

    PerfilGSAP(){
        cy.get('#search-value').type('GESTÃO SERVIÇOS ADMINISTRATIVOS DE POLOS ', { timeout: 40000 })
        cy.get('#button-search > .mat-button-wrapper > .mat-icon').click()
    }
    PesquisarTutor(){
        cy.get('#search-value').type('POLOS - TUTOR DE POLO', { timeout: 40000 })
        cy.get('#button-search > .mat-button-wrapper > .mat-icon').click()
    }

    AtivarPerfil(){
        cy.get('#mat-slide-toggle-14 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click()
        cy.wait(5000)
    }

    IrParaUnidadeFisica(){
        cy.contains('Unidade Física', { timeout: 40000 }).click();
    }

    PesquisaUnidadeFisica(){
        cy.get('#search-value').type('ANANINDEUA - PA')
       cy.get('#button-search > .mat-button-wrapper > .mat-icon').click()
        // Clicar no terceiro elemento forçando o clique
        cy.wait(3000)
    }
    VinculaPolo() {
        cy.contains('ANANINDEUA - PA')
        cy.get('#mat-slide-toggle-38 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click()
    }
    
    VincularPoloPrimario(){
        cy.get('mat-slide-toggle[ng-reflect-color="primary"]').eq(3).click(); 
        cy.wait(5000)
    }

    IrparaDadosProfissionais(){
        cy.wait(3000)
        cy.contains('Dados Profissionais', { timeout: 40000 }).click();
    }

    SelecionaCargo(){
        cy.get('#combo-Cargo').click();
        cy.contains('Supervisor de Polo', { timeout: 40000 }).click()
    }
    SelecionaFuncionarioSupervisor(){
        cy.get('mat-select[ng-reflect-id="combo-Funcionário Superior"]').click();
        cy.wait(5000)
        cy.get('#mat-input-21').type('Odilon')
        cy.wait(2999)
        cy.contains('mat-option', 'Odilon Henrique Martins da Silva').click();


    }
    SituacaoFuncionario(){
        cy.contains('Situação do Funcionário').click
        cy.wait(3000)
        cy.contains('Ativo').click
    }
    TurnoTrabalho(){
        cy.get('mat-select[ng-reflect-placeholder="Turno de Trabalho"]', { timeout: 40000 }).click();
        cy.get('mat-option[ng-reflect-id="combo-option-Integral"]').click();
    }
    RegimeContratacao(){
        cy.get('mat-select[ng-reflect-id="combo-Regime de Contratação"]', { timeout: 40000 }).click();
        cy.wait(3000)
        cy.contains('PJ').click
    }
    DataContratacao(){
        cy.get('input[id="hiring-date"]').type('01/02/2023');
    }
    TamanhoCamisa(){
        cy.wait
        cy.get('input[formcontrolname="cdTamanhoCamiseta"]').type('G');
    }
    AtivarParticipacaoSouMais(){
        cy.get('#mat-slide-toggle-106-input').click()
    }
}

export default new AccessControl();
