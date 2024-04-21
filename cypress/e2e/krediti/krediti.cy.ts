import { loginKorisnik, logout } from "../util/util"


describe('Krediti spec', () => {
  beforeEach(() => {
    loginKorisnik(cy);
  })
  after(() => {
    //logout(cy)
  })

  it('Novi kredit Radi', () => {

    cy.wait(200)
    cy.visit('http://localhost:3000/listaKredita')
    cy.wait(200)
    cy.get("#TraziKredit").click()

    cy.get('#vrstaKredita').click()
    // Sačekaj da se prikažu opcije
    cy.wait(1000)
    // Izaberi opciju "Gotovinski"
    cy.get('[role="option"]').contains('Gotovinski').click()
    // Popuni ostala polja forme
    cy.get('input[name="amount"]').type('10000')
    cy.get('input[name="loanPurpose"]').type('Kupovina automobila')
    cy.get('input[name="salary"]').type('50000')
    cy.get('input[name="permanentEmployee"]').check()
    cy.get('input[name="currentEmploymentPeriod"]').type('5 godina')
    cy.get('input[name="loanTerm"]').type('60')
    cy.get('#bankAccountNumber').click()
    cy.wait(1000)
    cy.get('[role="option"]').contains('444000000910000033').click()
    cy.get('input[name="branchOffice"]').type('Beograd')
    cy.wait(200)
    cy.get("#kwiknimeUwU").click();
    
    cy.wait(500)
  })

  it('Novi Kredit losaCena', () => {
    
  })

  it('Novi Kredit los', () => {
    
  })
})