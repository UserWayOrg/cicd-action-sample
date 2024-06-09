it('should have the right text in the headline', () => {
  cy.visit('/');

  cy.get('.headline').contains('Best Broadband');
  cy.get('.headline').contains('Internet Plans For You');

  cy.userwayAnalysis({
    strict: false,
    screenshots: false
  })
});
