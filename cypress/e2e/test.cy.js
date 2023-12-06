describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('checks the homepage', () => {
    cy.visit('/');
    cy.contains('h1', 'Congrats, you are ready to go!');
  });
});