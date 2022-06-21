// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My First Test', () => {
	it('Visits the Kitchen Sink', () => {
		cy.visit('http://stg.carwale.com/');

		cy.get('[data-testing-id="global-search-input"]').eq(1)
			.type('Hyundai')
			.should('have.value', 'Hyundai');
	});
});
