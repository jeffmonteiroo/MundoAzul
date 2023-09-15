import Loginpage from "../../../../pages/LoginPage"
import HomePage from "../../pages/HomePage"
import ComercialPage from "../../../../pages/Comercial/ComercialPage";
import HubPage from "../../../../pages/Comercial/SouMais/Coletivo/HubPage.js";

describe('Validar a tela de HUB - SOU MAIS - COLETIVO', () => {

  beforeEach(() => {
    Loginpage.LoginUser();
    Loginpage.Perfil_Completo();
    ComercialPage.Coletivo();
  });

  it('Cenário de teste 2 - Validar bread crumb', () => {
    HubPage.ValidarBreadCrumb();
  });

  it('Cenário de teste 3 - Validar o título da tela', () => {
    HubPage.ValidarTitulo();
  });

  it('Cenário de teste 4 - Validar Subtítulo', () => {
    HubPage.ValidarSubtítulo();
  });

  it('Cenário de teste 5 - Validar o título do card', () => {
    HubPage.ValidarTituloCard();
  });

  it('Cenário de teste 6 - Verificar se o botão "Acessar ambiente" existe', () => {
    HubPage.ValidarAcessoAmbiente();
  });

  it('Cenário de teste 7 - Validar mensagem de DISCLAIMER', () => {
    HubPage.ValidarDisclaimer();
  });

  it('Cenário de teste 8 - Acessar Checkpoint', () => {
    HubPage.AcessarCheckpoint();
  });

  it.only('Cenário de teste 9 - Executar todas as validações em um único cenário', () => {
    HubPage.ValidarBreadCrumb();
    HubPage.ValidarTitulo();
    HubPage.ValidarSubtítulo();
    HubPage.ValidarTituloCard();
    HubPage.ValidarAcessoAmbiente();
    HubPage.ValidarDisclaimer();
    HubPage.AcessarCheckpoint();
  });

});
