/// <reference types="cypress" />

describe('Register', () => {

   
  beforeEach(() =>{
  cy.visit ( 'https://159.89.29.216:8000/webmail/?_task=mail&_mbox=INBOX')

  cy.contains(':nth-child(1) > .title > label', 'Username')
  .should('exist')

  cy.contains(':nth-child(2) > .title > label', 'Password')
  .should('exist')

  cy.get('#rcmloginuser')
  .type ('qa-test@arixess.com')
  cy.get('#rcmloginpwd')
  .type ('catch123')

  cy.get('#rcmloginsubmit')
  .click()
  })

  it('to regiser an account and send mail', () => {
    cy.wait(3000)
    cy.get('#rcmbtn107')
    .click()

    cy.get('#_to')
        .type ('nadyayaremenkog@gmail.com')

    cy.get('#compose-subject')
    .type ('Testtask')

    cy.get('#composebody')
    .type ('Some text')

    cy.get('#rcmbtn107')
    .click()
  })
  it('go to sent mail  and delete', () => {

    cy.wait(3000)
    cy.get('#rcmliU2VudA > a')
    .click() 

    cy.get('body')
    .should('contain.text', 'Testtask')

    cy.get()
    .click()
    cy.get('#rcmbtn111')
    .click()




  })



  
})

