import { loginKorisnik, logout } from "../util/util"
import { novoPlacanje, prenos } from "./util";

describe('Placanja spec', () => {
  beforeEach(() => {
    loginKorisnik(cy);
  })
  after(() => {
    //logout(cy)
  })
  it('Novo placanje dobri podaci', () => {
    novoPlacanje(cy)
    cy.get("#iznos").type("1")
    cy.get("#racunPrimaoca").type("265000000810260304")
    cy.get("#pozivNaBroj").type("1")
    cy.get("#submitbuttonpaymentform").click()
    cy.visit('http://localhost:3000/verifikacija')
    cy.get("button").last().click()
    cy.get("input").last().invoke('val').then((value: any) => {
      if (!value) {
        return;
      }
      cy.visit('http://localhost:3000/placanja');

      cy.get("input").last().type(value.toString());

      cy.get("button").last().click()

      cy.get(".swal2-title").should('have.text', 'Uspeh');
    });

  })

  it('Novo placanje los iznos', () => {
    novoPlacanje(cy)
    cy.get("#iznos").type("a")
    cy.get("#racunPrimaoca").type("265000000810260304")
    cy.get("#pozivNaBroj").type("1")
    cy.get("#submitbuttonpaymentform").click()

  })
})