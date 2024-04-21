import { loginAdmin, logout } from "../util/util"

describe('Kredit spec', () => {
  beforeEach(() => {
    loginAdmin(cy);
  })
  after(() => {
    //logout(cy)
  })
  it('Odobri prvi kredit', () => {
    
    cy.visit('http://localhost:3000/listaKredita')
    cy.wait(200) // Sačekajte 200 milisekundi (prilagodite vreme čekanja po potrebi)
    cy.contains('ODOBRI').eq(0).click()

  })

  it('Odbij prvi kredit', () => {
   
    cy.visit('http://localhost:3000/listaKredita')
    cy.wait(200) // Sačekajte 200 milisekundi (prilagodite vreme čekanja po potrebi)
    cy.contains('ODBIJ').eq(0).click()
  })
})