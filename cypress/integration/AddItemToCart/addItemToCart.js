import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given(`I visit Angular-Seed`, () => {
    cy.visit('http://localhost:4200');
});

Then(`Angular-Seed home page is displayed`, () => {
    cy.location('pathname').should('eq', '/');
});

Then(`Increment, addToCart, display modal`, () => {
    cy.get('#inCrementBtn').click();
    cy.get('#addToCartBtn').click();
    cy.get('p').should('contain', 'Cet article a été ajouté au panier !');
});

Then(`See cart & empty cart`, () => {
    cy.get('#seeCartBtn').click();
    cy.get('h2').should('contain', 'Mon Panier');
    cy.get('#deleteBtn').click();
    cy.get('div').should('contain', 'Your shopping cart is empty');
});
