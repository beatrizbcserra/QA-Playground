import cadastro from '../support/pages/cadastroPage.js'

describe('Cadastro - Fluxos Negativos', () => {
  beforeEach(() => {
    cadastro.visitar()
    cy.fixture('usuarios_teste').as('usuarios')
  })

  it('Erro: usuário sem sobrenome', function () {
    const user = this.usuarios[1]

    cadastro.preencherNome(user.nome)
    cadastro.preencherEmail(user.email)
    cadastro.preencherSenha(user.senha)
    cadastro.confirmarSenha(user.confirmar_senha)
    cadastro.submeter()

    cadastro.validarNegativoModal('Erro no Cadastro')
  })

  it('Erro: usuário com dois espaços', function () {
    const user = this.usuarios[2]

    cadastro.preencherNome(user.nome)
    cadastro.preencherEmail(user.email)
    cadastro.preencherSenha(user.senha)
    cadastro.confirmarSenha(user.confirmar_senha)
    cadastro.submeter()

    cadastro.validarNegativoModal('Erro no Cadastro')
  })

  it('Erro: usuário com caracteres especiais', function () {
    const user = this.usuarios[3]

    cadastro.preencherNome(user.nome)
    cadastro.preencherEmail(user.email)
    cadastro.preencherSenha(user.senha)
    cadastro.confirmarSenha(user.confirmar_senha)
    cadastro.submeter()

    cadastro.validarNegativoModal('Erro no Cadastro')
  })

  it('Erro: usuário com email inválido', function () {
    const user = this.usuarios[6]

    cadastro.preencherNome(user.nome)
    cadastro.preencherEmail(user.email)
    cadastro.preencherSenha(user.senha)
    cadastro.confirmarSenha(user.confirmar_senha)
    cadastro.submeter()

    cadastro.validarNegativoModal('Erro no Cadastro')
  })

  it('Erro: usuário com senhas discrepantes', function () {
    const user = this.usuarios[12]

    cadastro.preencherNome(user.nome)
    cadastro.preencherEmail(user.email)
    cadastro.preencherSenha(user.senha)
    cadastro.confirmarSenha(user.confirmar_senha)
    cadastro.submeter()

    cadastro.validarNegativoModal('Erro no Cadastro')
  })

  it('Erro: usuário com um caracter no campo nome', function () {
    const user = this.usuarios[13]

    cadastro.preencherNome(user.nome)
    cadastro.preencherEmail(user.email)
    cadastro.preencherSenha(user.senha)
    cadastro.confirmarSenha(user.confirmar_senha)
    cadastro.submeter()

    cadastro.validarNegativoModal('Erro no Cadastro')
  })

})


