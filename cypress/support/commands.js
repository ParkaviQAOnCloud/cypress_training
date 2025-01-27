// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />



// cypress/support/commands.js
Cypress.Commands.add('signIn', (username, password) => {
    cy.visit('https://advisor.forastaging.net/login');
    cy.xpath('//h1[@class="text-center text-displayLargeMobile lg:text-title font-medium mb-4 lg:mb-1"]', { timeout: 12000 })
      .should('contain', 'Advisor Portal');
  
    // Click "Sign in here" link
    cy.xpath('//div[@class="text-left text-sm"]/a').should('have.text', 'Sign in here.').click();
  
    // Enter Username and Password
    cy.xpath('//input[@id="username"]').type(username);
    cy.xpath('//input[@id="password"]').type(password);
  
    // Click Sign In button
    cy.xpath('//button[@class="btn-primary justify-center"]').contains('Sign in').click();
  });
  