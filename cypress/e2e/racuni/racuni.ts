import { loginAdmin } from "../util/util"

describe('Provera racuna', () => {
  beforeEach(() => {
    loginAdmin(cy);
  })
  after(() => {
    //logout(cy)
  })
  it('pravi racun', () => {

    cy.wait(2000)
    cy.get('table').first().within(() => {
        // Klik na prvi red i prvu kolonu
            cy.get('tr:first').within(() => {
            cy.get('td:first').click();
            });

        })

        cy.wait(2000)
        cy.contains('button', "Dodaj racun").click();


        cy.wait(2000)

        cy.get('select[name="Tip"]').select('tekuci');

        cy.wait(2000)

        cy.get('select[name="Vrsta"]').select('Studentski');

        cy.contains('button', "Pretraga Korisnika").click();
        
        cy.wait(2000)
        
        cy.contains('button', "Kreiraj").click();

    })
})