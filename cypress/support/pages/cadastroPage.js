class CadastroPage {
  visitar() {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/')
    cy.contains('Cadastro').click()
  }

  preencherNome(nome) {
    cy.get('#nome').clear().type(nome)
  }

  preencherEmail(email) {
    cy.get('#email').clear().type(email)
  }

  preencherSenha(senha) {
    cy.get('#senha').clear().type(senha)
  }

  confirmarSenha(senha) {
    cy.get('#confirmarSenha').clear().type(senha)
  }

  submeter() {
    cy.contains('Cadastrar').click()
  }

  validarNegativoModal(texto) {
    cy.get('.modal-content')
      .should('be.visible')
      .and('contain', texto)

    cy.contains('OK').click({force:true})
  }

  validarModal(texto) {
    cy.get('.modal-content')
      .should('be.visible')
      .and('contain', texto)

    cy.contains('OK').click()
  }


}

export default new CadastroPage()
