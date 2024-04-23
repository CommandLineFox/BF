import { loginAdmin, loginKorisnik, logout } from "../util/util"

describe('Kartice spec', () => {
    it('Rad sa karticama', () => {

        //Dodaj kartice
        loginAdmin(cy);
        cy.get('.idRacunaTd0').invoke('text').then(brojRacuna => {
            cy.visit('http://localhost:3000/kartice');
            cy.wait(1000);

            cy.get('table')
                .find('tbody')
                .children('tr')
                .then(rows => {
                    let initialRowCountUser;
                    if (rows.length === 1 && rows.eq(0).find('td').length === 1) {
                        initialRowCountUser = 0;
                    } else {
                        initialRowCountUser = rows.length;
                    }
                    logout(cy);
                    loginAdmin(cy);
                    cy.wait(1000);
                    cy.visit('http://localhost:3000/kartice');
                    cy.get("#dodajKarticuDugme").click();
                    cy.get("#brojRacunaInputt").type(brojRacuna);
                    cy.get("#buttonKreiraj").click();

                    logout(cy);
                    cy.wait(2000);
                    //Deo za dodavanje
                    loginKorisnik(cy);
                    cy.visit('http://localhost:3000/kartice');
                    cy.wait(1000);

                    cy.get('table')
                        .find('tbody')
                        .children('tr')
                        .then(rows => {
                            let rowCount;
                            if (rows.length === 1 && rows.eq(0).find('td').length === 1) {
                                rowCount = 0;
                            } else {
                                rowCount = rows.length;
                            }

                            cy.wrap(rowCount).should('equal', initialRowCountUser + 1);

                        });
                });
        })
    })
})