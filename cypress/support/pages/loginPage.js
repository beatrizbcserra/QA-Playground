class LoginPage {
  visitar() {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground')
    cy.contains('Login').click() 
  }

  preencherEmail(email) {
    cy.get('input[placeholder="Digite seu e-mail"]').clear().type(email)
  }  

  preencherSenha(senha) {
    cy.get('input[placeholder="Digite sua senha"]').clear().type(senha) 
  }

  submeter() {
    cy.contains('Entrar').click()
  }

  validarLoginSucesso(mensagem) {
    cy.get('.modal-content')
      .should('be.visible')
      .and('contain', mensagem)
    cy.contains('OK').click()
  }

  validarLoginFalho(mensagem) {
    cy.get('.modal-content')
      .should('be.visible')
      .and('contain', mensagem)
    cy.contains('OK').click({force:true})
  }

  preencherLogin(user) {
  this.preencherEmail(user.email)
  this.preencherSenha(user.senha)
  cy.get('input[type="checkbox"]').check() 
  
  this.submeter()
  }

}

export default new LoginPage()
