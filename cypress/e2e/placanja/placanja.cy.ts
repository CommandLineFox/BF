import { loginKorisnik, logout } from "../util/util"
import { novoPlacanje, prenos } from "./util";

describe('Placanja spec', () => {
  beforeEach(() => {
    loginKorisnik(cy);
  })

  it('Novo placanje dobri podaci', () => {
    novoPlacanje(cy)
    cy.get("#iznos").type("1")
    cy.get("#racunPrimaoca").type("265000000810260304")
    cy.get("#pozivNaBroj").type("1")
    cy.get("#submitbuttonpaymentform").click()
    cy.visit('http://localhost:3000/verifikacija')
    cy.get("button").last().click()
    cy.wait(300)
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
    cy.get('#iznos')
      .parent()
      .parent()
      .children().last()
      .should('have.text', 'Iznos mora biti veći od 0.');
  })

  it('Novo placanje los racun', () => {
    novoPlacanje(cy)
    cy.get("#iznos").type("1")
    cy.get("#racunPrimaoca").type("26500000081026030")
    cy.get("#pozivNaBroj").type("1")
    cy.get("#submitbuttonpaymentform").click()
    cy.get('#racunPrimaoca')
      .parent()
      .parent()
      .children().last()
      .should('have.text', 'Račun primaoca mora imati tačno 18 cifara.');
  })


  it('Novo placanje los otp', () => {
    novoPlacanje(cy)
    cy.get("#iznos").type("1")
    cy.get("#racunPrimaoca").type("265000000810260304")
    cy.get("#pozivNaBroj").type("1")
    cy.get("#submitbuttonpaymentform").click()
    cy.visit('http://localhost:3000/verifikacija')
    cy.get("button").last().click()
    cy.wait(300)
    cy.get("input").last().invoke('val').then((value: any) => {
      if (!value) {
        return;
      }
      cy.visit('http://localhost:3000/placanja');

      cy.get("input").last().type((value == "123456") ? "111111" : "123456");

      cy.get("button").last().click()
      
      cy.get('.swal2-title').should('not.exist');

    });

  })
})