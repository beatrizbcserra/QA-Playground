import login from '../support/pages/loginPage'
import cadastro from '../support/pages/cadastroPage'

describe('Login - Fluxo Completo', () => {
  beforeEach(() => {
    cy.fixture('usuarios_teste').as('usuarios')
  })

  it('Deve realizar cadastro e depois login com sucesso', function () {
    const user = this.usuarios[0]

    cadastro.visitar()
    cadastro.preencherNome(user.nome)
    cadastro.preencherEmail(user.email)
    cadastro.preencherSenha(user.senha)
    cadastro.confirmarSenha(user.confirmar_senha)
    cadastro.submeter()
    cadastro.validarModal('Cadastro realizado com sucesso!')

    login.visitar()
    login.preencherEmail(user.email)
    login.preencherSenha(user.senha)
    cy.get('input[type="checkbox"]').check()
    login.submeter()
    login.validarLoginSucesso('Login realizado com sucesso!')
  })
})