describe('Columns Test', () => {
    beforeEach(() => {
        cy.visit('/columns_test_page.html');
    });

    it('Check if the correct class is added based on the number of columns', () => {
        cy.get('.block1').should('have.class', 'columns-2-cols');
        cy.get('.block2').should('have.class', 'columns-1-cols');
        cy.get('.block3').should('have.class', 'columns-0-cols');
    });

    it('Check if the class "columns-img-col" is added when picture is the only content in column', () => {
        cy.get('.block1 div div').should('not.have.class', 'columns-img-col');
        cy.get('.block2 div div').should('have.class', 'columns-img-col');
    });

    it('Check if the class "columns-img-col" is not added when there is no picture in the column', () => {
        cy.get('.block3 div').should('not.have.class', 'columns-img-col');
    });
});