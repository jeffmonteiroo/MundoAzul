import Loginpage from "../../../pages/Loginpage"
import HomePage from "../../../pages/HomePage"
import Graduacao from "../../../pages/Graduação/Graduacao"
import CurricularizacaoExtensao from "../../../pages/Graduação/Curricularização da extensao/Hub"
import AtividadeExtensionistaSolicitante from "../../../pages/Graduação/Curricularização da extensao/AtividadeExtensionistaSolicitante"

describe('Cadastro de atividade extensionista', () => {
  it('Realizar o cadastro de atividade extensionista solicitante', () => {
    Loginpage.usuario_perfil_completo()
    HomePage.Graduacao()
    Graduacao.CurricularizacaoExtensao()
    CurricularizacaoExtensao.AtivExtSolicitante()
    AtividadeExtensionistaSolicitante.FormularioIdentificacao() //Passo 1
  })
})