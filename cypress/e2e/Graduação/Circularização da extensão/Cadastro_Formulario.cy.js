import Loginpage from "../../../pages/Loginpage"
import HomePage from "../../../pages/HomePage"
import Graduacao from "../../../pages/Graduação/Graduacao"
import CurricularizacaoExtensao from "../../../pages/Graduação/Curricularização da extensao/Hub"
import CadastroFormulario from "../../../pages/Graduação/Curricularização da extensao/CadastroFormulario"


describe('Cadastro Formulario', () => {
  it('Cadastrar Formulário', () => {
    Loginpage.usuario_perfil_completo()
    HomePage.Graduacao()
    Graduacao.CurricularizacaoExtensao()
    CurricularizacaoExtensao.CadFormulario()
    CadastroFormulario.CliqueCadForm()
    CadastroFormulario.FormularioTeste()
  })
})