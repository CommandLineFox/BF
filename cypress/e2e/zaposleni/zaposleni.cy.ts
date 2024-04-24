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

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(200);

  

    cy.contains('button', 'Dodaj Zaposlenog').click();
    cy.wait(200);

    it('should submit form with valid data', () => {
    
    cy.get('input[name="ime"]').type('Marko');
    cy.get('input[name="prezime"]').type('Markovic');
    cy.get('input[name="username"]').type('marko123');
    cy.get('input[name="jmbg"]').type('1234567890123');
    cy.get('input[name="password"]').type('lozinka123');
    cy.get('input[name="saltPassword"]').type('lozinka123');
    cy.get('input[name="date"]').type('2000-01-01');
    cy.get('select[name="Pol"]').select('Musko');
    cy.get('input[name="adresa"]').type('Adresa 123');
    cy.get('input[name="email"]').type('marko@example.com');
    cy.get('input[name="brojTelefona"]').type('123456789');
    cy.get('input[name="pozicija"]').type('Radnik');
    cy.get('input[name="departman"]').type('IT');

    // Opciono: Označavanje dozvola
    cy.get('input[type="checkbox"]').check();

    cy.get('button[type="submit"]').click();

        cy.wait(2000);
      });

  })
})
