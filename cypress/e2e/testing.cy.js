
describe('Test to launch a browser', () => {
    
    it('launch browser test', () => {
     
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        cy.get('#input-firstname').type('Sam')
        cy.get('#input-lastname').type('Akin')
        


    })









})