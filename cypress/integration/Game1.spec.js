context('Game 1', () => {
    beforeEach(() => {
        cy.viewport(2000, 1000)
        cy.visit('nmhung0519.github.io/CNPM/Sources/Game1.html')
    })
    it('Start - Correct - Increase score', function() {
        cy.get('#start_button').click().should('be.not.visible')
        cy.get('body').type('1')
        cy.get('body').type('7')
    })
    it('Wrong - Decrease score', function() {
        cy.get('#start_button').click()
        cy.get('body').type('1')
        cy.get('body').type('7')
        cy.wait(1500)
        cy.get('body').type('1')
    })
    it('Next grade', function() {
        cy.get('#start_button').click()
        cy.get('body').type('1')
        cy.get('body').type('7')
        cy.wait(1500)
        cy.get('body').type('3')
        cy.get('body').type('9')
        cy.wait(1500)
        cy.get('body').type('2')
        cy.get('body').type('6')
        cy.get('#start_button').should('be.visible')
    })
    it('Back', function() {
        cy.get('#container').contains('Back').click()
    })
})