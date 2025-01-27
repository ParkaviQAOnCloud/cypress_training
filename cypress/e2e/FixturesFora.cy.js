//Fixtures - Load a fixed set of data located in a File.

// Fixture is a file which contains set of data , that particular data we can use it in our program
///<reference types="cypress" />

describe('Sign In Test', () => {
  before(function () {
    // Load test data from the fixture file
    cy.fixture('example').then((data) => {
      this.testData = data;
    });
  });

  context('Tests for Incorrect and Correct Passwords', () => {
    it('Sign In with Incorrect Password', function () {
      const { username, password, expectedError } = this.testData[0]; // First test case (wrong password)
      cy.signIn(username, password);

      // Verify the error message for incorrect credentials
      cy.xpath('//p[@class="my-1 text-sm text-error"]').should('contain', expectedError);
    });

    it('Sign In with Correct Password', function () {
      const { username, password } = this.testData[1]; // Second test case (correct password)
      cy.signIn(username, password);

      // Verify successful login
      cy.url().should('not.contain', '/login');
      //cy.wait(1000)
    });
  });

  context('Tests After Successful Sign In - Home Page', () => {
    beforeEach(function () {
      const { username, password } = this.testData[1]; // Use correct credentials for further tests
      cy.signIn(username, password);
    });

    it('Verify the Home Page - page title', () => {
      // Check for a specific banner message
      cy.xpath('//h1[@class="font-medium text-headerFS24 text-primary"]',{ timeout: 12000 })
        .should('have.text', 'Welcome, Kaviya!');
    });

    it('Verify Set sail Button is working- Home Page', () => {
      cy.get('a > .inline-flex',{ timeout: 12000 })
      .click();
    })

      it('Verify Back button is working- Home Page', () => {
        cy.get('a > .inline-flex',{ timeout: 12000 })
        .click();
        cy.get('.inline-flex > .hidden')
       .click();
    
    });

    it('Verify the List of statements are visible or not', () => { 
    cy.xpath('//ul[@class="list-disc ml-5 text-secondaryDark text-left lg:px-0 text-[12px]"]/li[1]')
   .should('have.text','Complete at least one booking')

   
   cy.xpath('//ul[@class="list-disc ml-5 text-secondaryDark text-left lg:px-0 text-[12px]"]/li[2]')
   .should('contain','Watch videos and take quizzes for all')

   cy.xpath('//ul[@class="list-disc ml-5 text-secondaryDark text-left lg:px-0 text-[12px]"]/li[2]/a')
   .should('have.text','Essentials training lessons')
   .click();

   cy.go('back');

   cy.xpath('//ul[@class="list-disc ml-5 text-secondaryDark text-left lg:px-0 text-[12px]"]/li[3]')
   .should('contain','Complete')

   cy.xpath('//ul[@class="list-disc ml-5 text-secondaryDark text-left lg:px-0 text-[12px]"]/li[3]/a')
   .should('have.text','Essentials test')
   .click();

   cy.go('back');


  })


  it('Verify the Learn more statements are visible or not', () => {
    cy.xpath('//a[@class="text-link text-sm block mt-3"]')
    .should('have.text','Learn more about the benefits of status')
    .click();
    cy.go('back');
  })



  it('Verify the Year dropdown is working', () => {
    cy.xpath('//div/button[@class="text-left dropdown-button w-full py-3 text-smallLH20 text-main font-medium border-1 md:border-0 !pl-3 md:!pl-2 !pr-2"]')
    .scrollIntoView()
    .click();
    
  })

  it('Select Last month in Year dropdown is working', () => {
    cy.xpath('//div/button[@class="text-left dropdown-button w-full py-3 text-smallLH20 text-main font-medium border-1 md:border-0 !pl-3 md:!pl-2 !pr-2"]')
    .scrollIntoView()
    .click();
    cy.xpath('//div[@id="headlessui-popover-panel-:r4:"]/div', { timeout: 12000 }) // Locate the dropdown options
    //.first() // Select the last option in the list
    .should('be.visible')
    .last()
    .click();

  })

it('Verify the View these booking is clickable', () => {
  cy.xpath('//div/p[@class="text-medium font-medium text-main/40 md:hidden"]')
  .scrollIntoView()
  .contains('Excludes canceled bookings')


  cy.xpath('//div/a[@class="text-medium md:text-smallLH20 font-medium text-link hover:text-blue-600"]')
  .scrollIntoView()
  .should('contain', 'View these bookings')
  .click();

  cy.go('back');


})



 it('Verify Event page in Home page is working', () =>{
  cy.xpath('//div[@class="flex items-baseline gap-x-2"]/h2')
  .scrollIntoView()
  .contains('Today’s events');

}) 


it('Verify the Event page\'s view only is working or not - Home page', () => {
  cy.xpath('//header[@class="flex justify-between items-center mt-0 md:mt-1.5 custom-m-6 relative z-10"]/a',{timeout:12000})
  .scrollIntoView()
  .contains('View all')
  .click();

  cy.go('back');
})

  });
  });
