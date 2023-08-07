import Loginpage from "../../../pages/Loginpage"
import HomePage from "../../../pages/HomePage"
import Formularios from "../../../pages/Formularios"
import Graduacao from "../../../pages/Graduacao"
import CurricularizacaoExtensao from "../../../pages/Curricularizacao-extensao"
import CadastroFormulario from "../../../pages/CadastroFormulario"

describe('Cadastro Formulario', () => {
  it('Cadastrar Formulário', () => {
    Loginpage.jeffMonteiro()
    HomePage.Graduacao()
    Graduacao.CurricularizacaoExtensao()
    CurricularizacaoExtensao.CadastroFormulario()
    CadastroFormulario.CliqueCadForm()
    CadastroFormulario.FormularioTeste()
  })
})