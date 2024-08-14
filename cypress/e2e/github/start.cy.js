describe('start', () => {
    it('render', () => {
        cy.visit('https://github.com/')
        cy.get('.home-campaign-hero')
    })
    it('clear', () => {
        cy.viewport(1200, 700)
        cy.visit('https://github.com/')
        cy.get('.header-search-button').click()
        cy.get('#query-builder-test').type("e2e")
        cy.get('#query-builder-test-clear-button')
    })
    it('subscribe', () => {
        cy.visit('https://github.com/')
        cy.get('.btn-mktg').last().click()
        cy.get('#hero-section-brand-heading')
    })

})
