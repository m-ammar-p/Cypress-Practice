/// <reference types="cypress" />

describe("Test Login Funtionality", () => {

    beforeEach( () => {

        cy.visit("/")
    })
    
    it("should login to the website", () => {
    
        cy.fixture("Example").then(function (data) {
    
            this.data = data
        
            cy.login(this.data.name, this.data.password)
        
            cy.get('h1').contains("Dashboard")
            
            cy.contains("Invalid credentials").should("not.exist")
        
            cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/index.php/dashboard")
    
        }) // End of Fixture
    
    })
    
    it.skip("should not login to the website", () => {
    
    
        cy.login("Admin", "admin")
        
        cy.contains("Invalid credentials").should("exist")
    
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials")
    })
    
    afterEach( () => {
    
        cy.logOut()
    })
    
})
