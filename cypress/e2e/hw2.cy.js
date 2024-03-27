/// <reference types="cypress" />
describe('Cart Functionalities', () => {
    before(()=>{
        const email = "admin@yourstore.com"; 
        const password = "admin";
        // custom command 
        cy.loginToYourstore(email,password)



    })
    it('add', () => {
        cy.visit("/");
        cy.wait(1000)

        cy.get('.fa').click()
        cy.get('.nav-pills > :nth-child(2) > :nth-child(1)').click()
        cy.get('[style="display: block;"] > :nth-child(1) > .nav-link > p').click()
        cy.get('div.float-right > a.btn').click()
        cy.get('.content-header > .float-left').should("be.visible")
        cy.get('#Name').clear()
        cy.get('#Name').type("laptop123")
        cy.wait(1000)

        cy.get(':nth-child(2) > .col-md-9 > .k-widget > .k-multiselect-wrap').click() 
       cy.wait(1000)

       cy.get('#SelectedCategoryIds').select('2', { force: true })
       cy.get('#Price').clear().type("3000", { force: true });
     });




     it('search', () => {
        cy.visit("/");
        cy.wait(1000)
        cy.get('.fa').click()
        cy.get('.nav-pills > :nth-child(2) > :nth-child(1)').click()
        cy.get('[style="display: block;"] > :nth-child(1) > .nav-link > p').click()
        cy.get('#SearchProductName').clear()
        cy.get('#SearchProductName').type("laptop123")
        cy.get('#SearchCategoryId').select('2', { force: true })

         cy.get("#search-products").click()

       
     });





     it.only ('delete', () => {
        cy.visit("/");
        cy.wait(1000)
        cy.get('.fa').click()
        cy.get('.nav-pills > :nth-child(2) > :nth-child(1)').click()
        cy.get('[style="display: block;"] > :nth-child(1) > .nav-link > p').click()
        cy.get('#SearchProductName').clear()
        cy.get('#SearchProductName').type("laptop123")
        cy.get('#SearchCategoryId').select('2', { force: true })

         cy.get("#delete-selected").click()
         cy.get('#delete-selected-action-confirmation-submit-button').click()
     });



});