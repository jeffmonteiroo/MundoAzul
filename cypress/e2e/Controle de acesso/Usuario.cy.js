/// <reference types="cypress" />

import Loginpage from "../../pages/Loginpage"
import HomePage from "../../pages/HomePage"
import Usuario from "../../pages/Controle Acesso/UsuarioPage"


describe('Cadastrar usuário', () => {
  it('Cadastrar usuário + Perfil Completo', () => {

    Loginpage.usuario_perfil_ITD()
    HomePage.ControleAcesso()
    Usuario.AcessarUsuarios()
    Usuario.Cadastrar()
    Usuario.UsuarioExterno()
    Usuario.AlterarSenha() // Alterar senha no proximo acesso, NÃO 
    Usuario.PreencheCPF() //cpf(points = false)
    Usuario.ValidaCPF()
    Usuario.MsgCPF()
    Usuario.PreencheNome()
    Usuario.PreencheEmail()
    Usuario.PreencheSenha()
    Usuario.PreencheDataExpiracao()
    Usuario.SalvarCadastro()
    Usuario.ContinuarEditando()
    Usuario.IrParaPerfil()
    Usuario.PesquisaPorPerfil()
    Usuario.AtivarPerfil()
    
  })
})