
/// <reference types="cypress" />

import Loginpage from "../../../../pages/LoginPage"
import ComercialPage from "../../../../pages/Comercial/ComercialPage"
import HubIndividual from "../../../../pages/Comercial/SouMais/Individual/Hub-Individual"
import ParametrosPage from "../../../../pages/Comercial/SouMais/Individual/ParametrosPage"
import CadastroParametros from "../../../../pages/Comercial/SouMais/Individual/CadastroParametros"
describe('Parâmetros', () => {
  before(() => {
    Loginpage.LoginUser();
  });

  it('Cadastrar Parâmetros', () => {
    Loginpage.Perfil_Completo();
    ComercialPage.Individual();
    HubIndividual.Parametros();
    ParametrosPage.Cadastrar();
    CadastroParametros.ApagaParametro();
    CadastroParametros.PreencherCampos();
    CadastroParametros.ClickAddParametro();
    CadastroParametros.ClickSalvarParametro();
    CadastroParametros.ValidaMsgSucesso();
  });
});
