Cypress.Commands.add('login',()=>{
    cy.intercept('GET','https://www.goodreads.com/facebook_users/auth_status').as('signIn')
    cy.visit(`${Cypress.env('baseUrl')}/user/sign_in`)
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    
    cy.fixture('goodReadsData.json').then((userData) => {
        cy.get('button.authPortalSignInButton',{timeout:6000}).click()
        cy.get('input[id="ap_email"]').type(`${userData.userEmail}`)
        cy.get('input[id="ap_password"]').type(`${userData.userPassword}`)
        cy.get('[id="signInSubmit"]').click()
        cy.wait('@signIn')
        cy.wait(17000)
        cy.url().should('eq',`${Cypress.env('baseUrl')}/`)
      })
})
Cypress.Commands.add('signOut',()=>{
    cy.get('ul > li:nth-child(5) > div > a > span > img').click()
    cy.get('li[role="menuitem Sign out"]').contains('Sign out').click()
    cy.url().should('eq',`${Cypress.env('baseUrl')}/`)
})