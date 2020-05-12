context('Main', () => {
    beforeEach(() => {
        cy.visit('nmhung0519.github.io/CNPM')
    })
    it('Program', function() {
        cy.viewport(1156, 100)
        cy.viewport(1000, 200)
        cy.viewport(2000, 1000)
        cy.get('#list')
            .click(118, 150)
            .click(118, 250)
            .click(118, 350)
            .click(118, 450)
            .click(118, 50)
    })
    it('Game 1', function() {
        cy.viewport(2000, 1000)
        cy.get('#list').click(118, 50)
        cy.get('#board').click(440, 250)
        cy.get('#container').should('be.visible')
    })
    it('Game 2', function() {
        cy.viewport(2000,1000)
        cy.get('#list').click(118, 50)
        cy.get('#board').click(790, 250)
        cy.get('#container').should('be.visible')
    })
    it('Game 3', function() {
        cy.viewport(2000,1000)
        cy.get('#list').click(118, 50)
        cy.get('#board').click(1140, 250)
        cy.get('#container').should('be.visible')
    })
    it('Home', function() {
        cy.viewport(2000, 1000)
        cy.get('#menu').click(100, 28)
    })
})