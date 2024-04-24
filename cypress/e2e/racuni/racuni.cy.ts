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
    cy.get('table tbody tr:first-child td:first-child').click();


        cy.wait(2000)
        cy.contains('button', "Dodaj racun").click();


        cy.wait(2000)

        cy.get('#mui-component-select-Tip').click();

    

        cy.wait(2000)

        cy.get('select[name="Vrsta"]').select('Studentski');

        cy.contains('button', "Pretraga Korisnika").click();
        
        cy.wait(2000)
        
        cy.contains('button', "Kreiraj").click();

    })
})