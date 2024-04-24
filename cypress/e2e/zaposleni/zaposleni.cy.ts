import { loginAdmin, loginKorisnik, logout } from "../util/util"

describe('Provera firme spec', () => {
  beforeEach(() => {
    loginAdmin(cy);
  })
  after(() => {
    //logout(cy)
  })
  it('Admin dodavanje firme', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.get('#dodaj-zaposlenog-tab').click({ force: true });
    cy.wait(2000);

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
  

  })

  it('Admin dodavanje firme no name', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.get('#dodaj-zaposlenog-tab').click({ force: true });
    cy.wait(2000);


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
  

  })

  it('Admin dodavanje firme no suername', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.get('#lista-zaposlenih-tab').click();
    cy.wait(2000);

    it('should submit form with valid data', () => {
    
    cy.get('input[name="ime"]').type('Marko');
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

  it('Admin dodavanje firme no username', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.get('#lista-zaposlenih-tab').click();
    cy.wait(2000);

    it('should submit form with valid data', () => {
    
    cy.get('input[name="ime"]').type('Marko');
    cy.get('input[name="prezime"]').type('Markovic');

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

  it('Admin dodavanje firme no jmbg', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.get('#lista-zaposlenih-tab').click();
    cy.wait(2000);

    it('should submit form with valid data', () => {
    
    cy.get('input[name="ime"]').type('Marko');
    cy.get('input[name="prezime"]').type('Markovic');
    cy.get('input[name="username"]').type('marko123');

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

  it('Admin dodavanje firme', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.contains('button', 'Dodaj Zaposlenog no password').click();
    cy.wait(2000);

    it('should submit form with valid data', () => {
    
    cy.get('input[name="ime"]').type('Marko');
    cy.get('input[name="prezime"]').type('Markovic');
    cy.get('input[name="username"]').type('marko123');
    cy.get('input[name="jmbg"]').type('1234567890123');

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

  it('Admin dodavanje firme', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.get('#lista-zaposlenih-tab').click();
    cy.wait(2000);

    it('should submit form with valid data no date', () => {
    
    cy.get('input[name="ime"]').type('Marko');
    cy.get('input[name="prezime"]').type('Markovic');
    cy.get('input[name="username"]').type('marko123');
    cy.get('input[name="jmbg"]').type('1234567890123');
    cy.get('input[name="password"]').type('lozinka123');
    cy.get('input[name="saltPassword"]').type('lozinka123');

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

  it('Admin dodavanje firme', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.get('#lista-zaposlenih-tab').click();
    cy.wait(2000);

    it('should submit form with valid data no Pol', () => {
    
    cy.get('input[name="ime"]').type('Marko');
    cy.get('input[name="prezime"]').type('Markovic');
    cy.get('input[name="username"]').type('marko123');
    cy.get('input[name="jmbg"]').type('1234567890123');
    cy.get('input[name="password"]').type('lozinka123');
    cy.get('input[name="saltPassword"]').type('lozinka123');
    cy.get('input[name="date"]').type('2000-01-01');
    
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

  it('Admin dodavanje firme', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.get('#lista-zaposlenih-tab').click();
    cy.wait(2000);

    it('should submit form with valid data no adresa', () => {
    
    cy.get('input[name="ime"]').type('Marko');
    cy.get('input[name="prezime"]').type('Markovic');
    cy.get('input[name="username"]').type('marko123');
    cy.get('input[name="jmbg"]').type('1234567890123');
    cy.get('input[name="password"]').type('lozinka123');
    cy.get('input[name="saltPassword"]').type('lozinka123');
    cy.get('input[name="date"]').type('2000-01-01');
    cy.get('select[name="Pol"]').select('Musko');

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

  it('Admin dodavanje firme no email', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.get('#lista-zaposlenih-tab').click();
    cy.wait(2000);

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

    cy.get('input[name="brojTelefona"]').type('123456789');
    cy.get('input[name="pozicija"]').type('Radnik');
    cy.get('input[name="departman"]').type('IT');

    // Opciono: Označavanje dozvola
    cy.get('input[type="checkbox"]').check();

    cy.get('button[type="submit"]').click();

        cy.wait(2000);
      });

  })

  it('Admin dodavanje firme', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.contains('button', 'Dodaj Zaposlenog no brojtelefona').click();
    cy.wait(2000);

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
    
    cy.get('input[name="pozicija"]').type('Radnik');
    cy.get('input[name="departman"]').type('IT');

    // Opciono: Označavanje dozvola
    cy.get('input[type="checkbox"]').check();

    cy.get('button[type="submit"]').click();

        cy.wait(2000);
      });

  })

  it('Admin dodavanje firme', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.get('#lista-zaposlenih-tab').click();
    cy.wait(2000);

    it('should submit form with valid data no radnik', () => {
    
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

    cy.get('input[name="departman"]').type('IT');

    // Opciono: Označavanje dozvola
    cy.get('input[type="checkbox"]').check();

    cy.get('button[type="submit"]').click();

        cy.wait(2000);
      });

  })

  it('Admin dodavanje firme', () => {
   
    cy.wait(2000);

    cy.visit('http://localhost:3000/listaZaposlenih');
    cy.wait(2000);

  

    cy.contains('button', 'Dodaj Zaposlenog no departmant').click();
    cy.wait(2000);

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


    // Opciono: Označavanje dozvola
    cy.get('input[type="checkbox"]').check();

    cy.get('button[type="submit"]').click();

        cy.wait(2000);
      });

  })
  })



