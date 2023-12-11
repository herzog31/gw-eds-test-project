describe('cards-test-page', () => {
    beforeEach(() => {
        cy.visit('cards-test-page')
    })

    it('checks if the simple block is correctly transformed', () => {
        cy.get('.cards.simple ul').should('exist')
        cy.get('.cards.simple ul li').should('have.length', 1)
        cy.get('.cards.simple ul li .cards-card-image').should('exist')
    })

    it('checks if the complex block is correctly transformed', () => {
        cy.get('.cards.complex ul').should('exist')
        cy.get('.cards.complex ul li').should('have.length', 2)
        cy.get('.cards.complex ul li .cards-card-image').should('have.length', 2)
    })

    it('checks if the empty block is correctly transformed', () => {
        cy.get('.cards.empty ul').should('exist')
        cy.get('.cards.empty ul li').should('have.length', 0)
    })

    it('checks if the images are optimized', () => {
        cy.get('.cards-card-image picture').should('not.exist')
        cy.get('.cards-card-image img').each(($img) => {
            cy.wrap($img).should('have.attr', 'src').and('match', /750/)
        })
    })
})