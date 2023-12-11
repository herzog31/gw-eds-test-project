describe('Columns Test', () => {
    beforeEach(() => {
        cy.visit('columns-test-page');
    });

    it('Checks if the class is added based on the number of columns', () => {
        cy.get('.columns').each(($el) => {
            cy.wrap($el).children().should('have.class', `columns-${$el.children().length}-cols`);
        });
    });

    it('Checks if the class "columns-img-col" is added to the div with only picture', () => {
        cy.get('.columns').each(($el) => {
            cy.wrap($el).find('div').each(($div) => {
                if ($div.children().length === 1 && $div.find('picture').length === 1) {
                    cy.wrap($div).should('have.class', 'columns-img-col');
                }
            });
        });
    });

    it('Checks if the class "columns-img-col" is not added to the div without picture', () => {
        cy.get('.columns').each(($el) => {
            cy.wrap($el).find('div').each(($div) => {
                if ($div.find('picture').length === 0) {
                    cy.wrap($div).should('not.have.class', 'columns-img-col');
                }
            });
        });
    });
});