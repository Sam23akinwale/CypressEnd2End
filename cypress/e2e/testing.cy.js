
describe('Test to launch a browser', () => {
    
    it('launch browser test', () => {
     
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        cy.get('#input-firstname').type('Samo')
        cy.get('#input-lastname').type('Akinm')
        cy.get('#input-email').type('kaziyin@yahoo.co.uk')
        cy.get('#input-telephone').type('07428123477')
        cy.get('#input-password').type('Simi12')
        cy.get('#input-confirm').type('Simi12')
        cy.get('input[type="checkbox"]').check()
        cy.get('.btn.btn-primary').click()
       
        
    


    })









})