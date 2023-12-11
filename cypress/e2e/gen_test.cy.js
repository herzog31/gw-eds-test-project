describe('cards-test-page', () => {
    beforeEach(() => {
        cy.visit('cards-test-page');
    });

    it('Check if divs are converted to ul, li', () => {
        cy.get('.cards').each(($card) => {
            cy.wrap($card).should('have.prop', 'tagName').should('eq', 'UL');
            cy.wrap($card).children().each(($item) => {
                cy.wrap($item).should('have.prop', 'tagName').should('eq', 'LI');
            });
        });
    });

    it('Check if divs with single picture child have class "cards-card-image"', () => {
        cy.get('.cards-card-image').each(($div) => {
            cy.wrap($div).children().should('have.length', 1);
            cy.wrap($div).find('picture').should('exist');
        });
    });

    it('Check if divs without single picture child have class "cards-card-body"', () => {
        cy.get('.cards-card-body').each(($div) => {
            cy.wrap($div).children().should('not.have.length', 1);
            cy.wrap($div).find('picture').should('not.exist');
        });
    });

    it('Check if all images are replaced with optimized pictures', () => {
        cy.get('img').each(($img) => {
            cy.wrap($img).parents('picture').should('not.exist');
        });
    });

    it('Check if block text content is empty', () => {
        cy.get('.cards').each(($card) => {
            cy.wrap($card).invoke('text').should('be.empty');
        });
    });
});