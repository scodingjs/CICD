describe('Quiz App - Render Deployment', () => {
  it('should load the quiz page ', () => {
    cy.visit('https://cicd-1suy.onrender.com/');

    // cy.get('[data-cy=question-text]')
    //   .should('exist')
    //   .and('not.be.empty');

    // cy.get('[data-cy=option]').should('have.length.greaterThan', 0);
  });
});
