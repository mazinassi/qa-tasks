/// <reference types="cypress" />

describe('Selectors', () => {
    it('telerik Selectors', () => {
        cy.visit("/");
        cy.get('.navbar-brand').click();
        cy.get('[show-authed="false"] > :nth-child(1) > .nav-link').click();
       cy.get('[show-authed="false"] > :nth-child(3) > .nav-link').click();
      cy.get('p.text-xs-center > [ui-sref="app.login"]').click();
      cy.get('.btn');   
     cy.get('.text-xs-center.ng-binding');
      cy.get('.logo-font').click();
          cy.get('.attribution');
      cy.get('.attribution > a');
      cy.get(':nth-child(1) > .form-control');
       cy.get(':nth-child(2) > .form-control');
      cy.get(':nth-child(3) > .form-control');


    });
});