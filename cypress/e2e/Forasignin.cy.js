///<refernce type="cypress">


/*describe('Sign In test', () =>{
    it('Sign in using not an advisor - Wrong Password', () =>{
        cy.visit('https://advisor.forastaging.net/login'); //used Fora website to visit
        cy.title('//h1[@class="text-center text-displayLargeMobile lg:text-title font-medium mb-4 lg:mb-1"]', {timeout:12000})
        .should('contains', 'Advisor Portal');


        cy.xpath('//div[@class="text-left text-sm"]/span').should('be.visible');
        
        
        cy.xpath('//div[@class="text-left text-sm"]/a').should('have.text','Sign in here.');
        cy.xpath('//div[@class="text-left text-sm"]/a').click();


        cy.xpath('//div[@class="mt-6"]/label').should('have.text','Username');
        cy.xpath('//input[@id="username"]').type('kaviya19@gmail.com');



        cy.xpath('//div[@class="show_hide_password"]/label').should('have.text','Password');
        cy.xpath('//input[@id="password"]').type('Qaoncloud@02');



        cy.xpath('//button[@class="btn-primary justify-center"]').contains('Sign in').click();
        cy.xpath('//p[@class="my-1 text-sm text-error"]').contains('Unable to log in with provided credentials.')



        cy.xpath('//div[@class="text-sm"]').contains('Forgot password').click();

    })



    it('Sign in using not an advisor - Correct Password', () =>{
        cy.visit('https://advisor.forastaging.net/login'); //used Fora website to visit
        cy.title('//h1[@class="text-center text-displayLargeMobile lg:text-title font-medium mb-4 lg:mb-1"]', {timeout:12000})
        .should('contains', 'Advisor Portal');


        cy.xpath('//div[@class="text-left text-sm"]/span').should('be.visible');
        
        
        cy.xpath('//div[@class="text-left text-sm"]/a').should('have.text','Sign in here.');
        cy.xpath('//div[@class="text-left text-sm"]/a').click();


        cy.xpath('//div[@class="mt-6"]/label').should('have.text','Username');
        cy.xpath('//input[@id="username"]').type('kaviya19@gmail.com');



        cy.xpath('//div[@class="show_hide_password"]/label').should('have.text','Password');
        cy.xpath('//input[@id="password"]').type('Qaoncloud@01');



        cy.xpath('//button[@class="btn-primary justify-center"]').contains('Sign in').click();


    })



})*/

///<reference types="cypress" />

describe('Sign In Test - Data Driven', () => {
    const testData = [
      {
        scenario: 'Sign in using not an advisor - Wrong Password',
        username: 'kaviya19@gmail.com',
        password: 'Qaoncloud@02',
        expectedError: 'Unable to log in with provided credentials.',
        forgotPassword: true,
        expectedRedirect: '/reset-password', 
      },
      {
        scenario: 'Sign in using not an advisor - Correct Password',
        username: 'kaviya19@gmail.com',
        password: 'Qaoncloud@01',
        expectedError: null, // No error for correct credentials
        forgotPassword: false,
        expectedRedirect: null, // No redirection for successful login
      },
    ];
  
    testData.forEach(({ scenario, username, password, expectedError, forgotPassword, expectedRedirect }) => {
      it(scenario, () => {
        cy.visit('https://advisor.forastaging.net/login'); 
        cy.xpath(
          '//h1[@class="text-center text-displayLargeMobile lg:text-title font-medium mb-4 lg:mb-1"]',
          { timeout: 12000 }
        ).should('contain', 'Advisor Portal');
  
        // Verify and click "Sign in here" link
        cy.xpath('//div[@class="text-left text-sm"]/span').should('be.visible');
        cy.xpath('//div[@class="text-left text-sm"]/a').should('have.text', 'Sign in here.');
        cy.xpath('//div[@class="text-left text-sm"]/a').click();
  
        // Enter Username
        cy.xpath('//div[@class="mt-6"]/label').should('have.text', 'Username');
        cy.xpath('//input[@id="username"]').type(username);
  
        // Enter Password
        cy.xpath('//div[@class="show_hide_password"]/label').should('have.text', 'Password');
        cy.xpath('//input[@id="password"]').type(password);
  
        // Click Sign In button
        cy.xpath('//button[@class="btn-primary justify-center"]').contains('Sign in').click();
  
        // Verify outcome
        if (expectedError) {
          // Verify error message for invalid credentials
          cy.xpath('//p[@class="my-1 text-sm text-error"]').should('contain', expectedError);
        } else {

          // No error for correct credentials
          cy.url().should('not.contain', '/login');
        }
  
        // Handle "Forgot password" click 
        if (forgotPassword) {
          cy.xpath('//div[@class="text-sm"]').contains('Forgot password').click();
  
          // Verify redirection matches actual behavior
          if (expectedRedirect) {
            cy.url({ timeout: 10000 }).should('contain', expectedRedirect);
          } else {
            cy.log('No redirection expected');
          }
        }
      });
    });
  });
  
    
