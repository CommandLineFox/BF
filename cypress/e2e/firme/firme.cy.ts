import { loginAdmin, loginKorisnik, logout } from "../util/util"

describe('Provera firme spec', () => {
  beforeEach(() => {
    loginAdmin(cy);
  })
  after(() => {
    //logout(cy)
  })
  it('Admin dodavanje firme', () => {
   
    cy.wait(200);

    cy.visit('http://localhost:3000/listaFirmi');
    cy.wait(200);

  

    cy.contains('button', 'Dodaj Firmu').click();
    cy.wait(200);

    it('should submit form with valid data', () => {
        cy.get('input[name="nazivPreduzeca"]').type('TribalCamping');
        cy.get('input[name="brojTelefona"]').type('123456789');
        cy.get('input[name="brojFaksa"]').type('987654321');
        cy.get('input[name="pib"]').type('1234567890123');
        cy.get('input[name="maticniBroj"]').type('123456789');
        cy.get('input[name="sifraDelatnosti"]').type('123456');
        cy.get('input[name="registarskiBroj"]').type('123456789');
    
        cy.get('button').contains('Kreiraj').click();
    
        // Assert success message or any other behavior upon successful submission
        cy.wait(2000);
      });

    
  })

 
})