/// <reference types="cypress" />

describe('Register', () => {
    it('to regiser an account', () => {
    cy.visit( 'https://159.89.29.216:8000/webmail/?_task=mail&_mbox=INBOX')
    
    cy.get('#rcmloginuser')
    .type ('qa-test@arixess.com')
    cy.get('#rcmloginpwd')
    .type ('catch123')
  
    cy.get('#rcmloginsubmit')
    .click()

    cy.get('#rcmrowMjM0 > .subject > a > span').click()
    cy.get('#markmessagemenulink').click()
    cy.get('#rcmbtn124 > .icon').click()

    //cy.contains('#rcmrowMjM0 > .status','#statusicnrcmrowMjM0')
    //.should ('exist' )

    cy.get('#rcmrowMjM0 > .subject > a > span').click()
    cy.get('#statusicnrcmrowMjM0').clear()
    




    })
    
    })