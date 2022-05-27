<reference  types="cypress"/>
describe("Counter Test", function (){
    beforeEach("Button should exist",function(){
        cy.visit("https://example.cypress.io/todo")
       
    })
    it("should hva property",function(){
     cy.get(".new-todo").should("exist")
    })
});