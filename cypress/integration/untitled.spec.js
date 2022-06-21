// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My First Test', () => {
	it('Visit Carwale and Enter Car Query in Global Search Bar', () => {
		// To set customized viewport size, use cy.viewport() command
		// cy.viewport('iphone-xr');

		cy.visit('http://stg.carwale.com/');
		// Encapsulate the code in a function to make it reusable like login function this must be in support/commands.js
		// cy.login('fake@gmail.com', 'fakepassword');

		cy.get('[data-testing-id="global-search-input"]').eq(1)
			.type('Hyundai')
            .should('have.value', 'Hyundai');
        // Pick next element after input which is button
        cy.get('[data-testing-id="Custom-Global-Search"]').next().click();
        
	});
});
