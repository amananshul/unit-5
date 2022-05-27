describe("Counter Test", function (){
    it("Button should exist",function(){
        cy.visit("over-stock.netlify.app")
        cy.get(".top_img").should("exist")
    })
})