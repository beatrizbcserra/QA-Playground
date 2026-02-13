import login from '../support/pages/loginPage'
import cadastro from '../support/pages/cadastroPage'

describe('Login - Fluxo Completo', () => {
  beforeEach(() => {
    cy.fixture('usuarios_teste').as('usuarios')
  })

  it('Não deve realizar cadastro e depois login com sucesso', function () {
    const user = this.usuarios[1]

    cadastro.visitar()
    cadastro.preencherNome(user.nome)
    cadastro.preencherEmail(user.email)
    cadastro.preencherSenha(user.senha)
    cadastro.confirmarSenha(user.confirmar_senha)
    cadastro.submeter()
    cadastro.validarNegativoModal('Erro no Cadastro')

    login.visitar()
    login.preencherEmail(user.email)
    login.preencherSenha(user.senha)
    cy.get('input[type="checkbox"]').check()
    login.submeter()
    login.validarLoginFalho('Nenhum cadastro encontrado. Realize o cadastro antes de fazer login.')
  })


  
})