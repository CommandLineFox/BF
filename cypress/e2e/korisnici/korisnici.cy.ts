import { loginAdmin, loginKorisnik, logout } from "../util/util"

describe('Provera kursa spec', () => {
  beforeEach(() => {
    loginAdmin(cy);
  })
  after(() => {
    //logout(cy)
  })
  it('Admin dodavanje korisnika', () => {
   
    cy.get('#dodajKorisnikaDugme').click();
    cy.wait(200);

    const ime = 'Bogdan';
    const prezime = 'Tomic';
    const jmbg = '2104001710106';
    const datumRodjenja = '2001-04-21';
    const adresa = '123 Main St, City';
    const email = 'john.doe@example.com';
    const brojTelefona = '1234567890';

    cy.get('input[name="ime"]').type(ime);
    cy.get('input[name="prezime"]').type(prezime);
    cy.get('input[name="jmbg"]').type(jmbg);
    cy.get('input[name="date"]').type(datumRodjenja);
    cy.get('select[name="Pol"]').select('Musko'); // Možeš promeniti vrednost ako je potrebno
    cy.get('input[name="adresa"]').type(adresa);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="brojTelefona"]').type(brojTelefona);

    cy.get('button').contains('Kreiraj').click();

    cy.wait(2000);
  })

 
})