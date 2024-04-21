import { loginKorisnik, logout } from "../util/util"


describe('Placanja spec', () => {
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
    
  })

  it('Novo placanje los iznos', () => {
    
  })
})