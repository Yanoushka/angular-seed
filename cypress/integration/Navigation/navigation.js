import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given(`I visit Angular-Seed`, () => {
    cy.visit('http://localhost:4200');
});

Then(`Angular-Seed page is displayed`, () => {
    cy.get('#detailsBtn').click();
    cy.get('p').should('contain', 'pet-details-page works!');
});
