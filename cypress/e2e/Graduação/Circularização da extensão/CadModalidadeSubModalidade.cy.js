import Loginpage from "../../../pages/Loginpage"
import HomePage from "../../../pages/HomePage"
import Graduacao from "../../../pages/Graduação/Graduacao"
import CurricularizacaoExtensao from "../../../pages/Graduação/Curricularização da extensao/Hub"
import CadastroModalidadeeSubModalidade from "../../../pages/Graduação/Curricularização da extensao/CadastroModalidadeeSubModalidade"

describe('Cadastro de Modalidade e Sub Modalidade', () => {
  it('Cadastrar Modalidade e Submodalidade', () => {
    Loginpage.usuario_perfil_completo()
    HomePage.Graduacao()
    Graduacao.CurricularizacaoExtensao()
    CurricularizacaoExtensao.CadModalidadeSubmModalidade()
    CadastroModalidadeeSubModalidade.FormularioModalidade()
    CadastroModalidadeeSubModalidade.FormularioSubModalidade()
  
  })
})