describe('E2E spec', () => {
  it('visits the staging site', () => {
    cy.visit('/Login')
    cy.get('a[href*="AuthRedirect?"]').click()
    cy.origin('https://testulplatform.b2clogin.com', () => {
      cy.get('#signInName').type(Cypress.env('account_email'))
      cy.get('#continue').click()
      cy.get('#password').type(Cypress.env('login'))
      cy.get('#continue').click()
    })
    cy.get('a[href*="AuthRedirect?"]').should('be.visible')
    cy.reload()

    cy.get('h1').should('be visible')
    // .should(($h1) => {
    //   expect($h1).to.contain('migrationtest@myyahoo.com')
    // })


  })
})
