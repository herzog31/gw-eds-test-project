describe('Sample tests', () => {
  it('compares true with true', () => {
    expect(true).to.equal(true)
  })

  it('checks the title of the homepage', () => {
    cy.visit('/');
    cy.contains('h1', 'Congrats, you are ready to go!');
  });
});