Cypress.Commands.add('preencherCadastro', (user) => {
  cy.get('input[placeholder="Digite seu nome"]').clear().type(user.nome)
  cy.get('input[placeholder="Digite seu e-mail"]').clear().type(user.email)
  cy.get('input[placeholder="Digite sua senha"]').clear().type(user.senha)
  cy.get('input[placeholder="Confirme sua senha"]').clear().type(user.confirmar_senha)
  cy.contains('Cadastrar').click()
})

Cypress.Commands.add('validarSucessoModal', (mensagem) => {
  cy.contains(mensagem, { timeout: 10000 }).should('be.visible')
  cy.contains('OK').click()
})

Cypress.Commands.add('validarErroModal', (mensagem) => {
  cy.contains('Erro no Cadastro', { timeout: 10000 }).should('be.visible')
  cy.contains(mensagem, { timeout: 10000 }).should('be.visible')
  cy.contains('OK').click({force:true})
})
