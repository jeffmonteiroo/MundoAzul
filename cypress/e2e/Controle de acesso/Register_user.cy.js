/// <reference types="cypress" />

import Loginpage from "../../pages/Loginpage"
import HomePage from "../../pages/HomePage"
import ControleAcesso from "../../pages/ControleAcesso"


describe('Cadastrar usuário', () => {
  it('Cadastrar Formulário', () => {

    Loginpage.jeffMonteiro()
    HomePage.ControleAcesso()
    ControleAcesso.AcessarUsuarios()
    ControleAcesso.Cadastrar()
    ControleAcesso.UsuarioExterno()
    ControleAcesso.AlterarSenha() // Alterar senha no proximo acesso, NÃO 
    ControleAcesso.PreencheCPF() //cpf(points = false)
    ControleAcesso.ValidaCPF()
    ControleAcesso.MsgCPF()
    ControleAcesso.PreencheNome()
    ControleAcesso.PreencheEmail()
    ControleAcesso.PreencheSenha()
    ControleAcesso.PreencheDataExpiracao()
    ControleAcesso.SalvarCadastro()
    ControleAcesso.ContinuarEditando()
    ControleAcesso.IrParaPerfil()
    ControleAcesso.PesquisaPorPerfil()
    ControleAcesso.AtivarPerfil()
    
  })
})