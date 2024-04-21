import { loginKorisnik } from "../util/util";

describe("Menjacnica spec", () => {
  beforeEach(() => {
    loginKorisnik(cy);
  });
  after(() => {});
  it("Menjacnica main page", () => {
    cy.wait(200);
    cy.visit("http://localhost:3000/menjacnica");
    cy.wait(200);
    cy.get("#iznosTextField").type("1");
    cy.get("#saRacunaTextField").click();
    cy.wait(1000);
    cy.get('[role="option"]').contains("444000000910000033").click();

    cy.get("#naRacunTextField").click();
    cy.wait(1000);
    cy.get('[role="option"]').contains("444000000910000033").click();
    cy.get("#nastaviButton").click();
    cy.wait(200);
    cy.get("#potvrdiButton").click();
  });
});
