import cadastro from '../support/pages/cadastroPage'

describe('Cadastro - Fluxos Positivos', () => {
  beforeEach(() => {
    cadastro.visitar()
    cy.fixture('usuarios_teste').as('usuarios')
  })

  it('Cadastro com sucesso', function () {
    const user = this.usuarios[0]

    cadastro.preencherNome(user.nome)
    cadastro.preencherEmail(user.email)
    cadastro.preencherSenha(user.senha)
    cadastro.confirmarSenha(user.confirmar_senha)
    cadastro.submeter()

    cadastro.validarModal('Cadastro realizado com sucesso!')
  })

  it('Cadastro com sucesso', function () {
    const user = this.usuarios[7]

    cadastro.preencherNome(user.nome)
    cadastro.preencherEmail(user.email)
    cadastro.preencherSenha(user.senha)
    cadastro.confirmarSenha(user.confirmar_senha)
    cadastro.submeter()

    cadastro.validarModal('Cadastro realizado com sucesso!')
  })


})
