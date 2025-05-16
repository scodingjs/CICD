// cypress/e2e/Quiz.cy.jsx
import Quiz from "../../client/src/components/Quiz"

describe('My Page load test', () => {
  it('visits the homepage', () => {
    cy.visit('/')
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    // cy.contains('Welcome') // change to a string from your homepage
  })
})
