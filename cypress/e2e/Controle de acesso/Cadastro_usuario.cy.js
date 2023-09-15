/// <reference types="cypress" />

import Loginpage from "../../pages/LoginPage"
import HomePage from "../../pages/HomePage"
import UsuarioPage from "../../pages/Controle Acesso/UsuarioPage"


describe('Cadastrar usuário', () => {
  it('Cadastrar usuário + Perfil', () => {


    Loginpage.LoginUser()
    Loginpage.Perfil_ITD()
    HomePage.ControleAcesso()
    UsuarioPage.AcessarUsuarios()
    UsuarioPage.Cadastrar()
    UsuarioPage.UsuarioExterno()
    UsuarioPage.AlterarSenha() // Alterar senha no proximo acesso, NÃO 
    UsuarioPage.PreencheCPF() //cpf(points = false)
    UsuarioPage.ValidaCPF()
    UsuarioPage.MsgCPF()
    UsuarioPage.PreencheNome()
    UsuarioPage.PreencheEmail()
    UsuarioPage.PreencheSenha()
    UsuarioPage.PreencheDataExpiracao()
    UsuarioPage.SalvarCadastro()
    UsuarioPage.ValidaMsg()
    UsuarioPage.ContinuarEditando()
    UsuarioPage.IrParaPerfil()
    UsuarioPage.PesquisarTutor()
    UsuarioPage.AtivarPerfil()
    UsuarioPage.ValidaMsg()
    UsuarioPage.IrParaUnidadeFisica()
    UsuarioPage.PesquisaUnidadeFisica()
    UsuarioPage.VinculaPolo()
    UsuarioPage.VincularPoloPrimario()
    UsuarioPage.IrparaDadosProfissionais()
    UsuarioPage.SelecionaCargo()
    UsuarioPage.SelecionaFuncionarioSupervisor()
    UsuarioPage.TurnoTrabalho()
    UsuarioPage.RegimeContratacao()
    UsuarioPage.DataContratacao()
    UsuarioPage.TamanhoCamisa()
    UsuarioPage.AtivarParticipacaoSouMais()
    
  })
})