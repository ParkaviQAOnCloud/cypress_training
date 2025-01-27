//Page Object Model Pattern

//We are locating the elemets multiple times in the multiple testcases so instead of doing this, 
// what we can do is we will locate only once we will write all the locators only once and we will reuse
// those locators in multiple testcases so that is all about POM 

//Problems without POM - 1) Same elements we are writing in multiple locators
// 2) Updation  of elements  

//POM consists of page elements and corresponding actions.

//Once you created your page elements in one class and 
//  those elements will be referred in multiple test cases and this will avoid duplication 
//and this will avoid duplication and this will avoid duplication 

// also if i want to modify any locator just directly go to particular page object class and 
// directly you can modify the locator

//duplication of elements are also not present because 
// we can refer those elements in the multiple classes or multiple tests
// so we can avoid the duplication and we can easily update the locators so that whichever 
//locators not working and then we can directly go to the particular class and
//  if we modify here  that will automatically reflect in evry test case 
// so this  is the main advantage of using POM


import SignIn from "../support/PageObjectModel/SignIn";

//using POM  approach
describe('Page Object Model testsuite -  Sign in of the Github Account', () => {

    beforeEach(() => {
        cy.visit('https://github.com'); // Visit the website
        
    });

     const sign = new SignIn();
     
    it('Sign in button is visible', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .should('be.visible');

    })


    it('Click Sign in button of the  Github account', () => {
        sign.clickSignIn();
    })


    it('Verify the "Sign in to Github" title is visible or not ', () => {
        sign.clickSignIn()
        cy.xpath('//div[@class="auth-form-header p-0"]/h1')
        .should('have.text', 'Sign in to GitHub');

    })


    it('Verify the "Username" field is visible or not ', () => {
        sign.clickSignIn()
        cy.xpath('//form/label')
        .contains('Username or email address');
        
    })

    it('Verify the "Username" field is able to take values ', () => {
        sign.clickSignIn()
        sign.setUserName("shwethaacharya15")
        
    })

    it('Verify the " Forgot Password" field is visible ', () => {
        sign.clickSignIn()
        sign.setUserName("shwethaacharya15")
        cy.xpath('//a[@class="label-link position-absolute top-0 right-0"]')
        .contains('Forgot password?');

    })


    it('Verify the " Forgot Password" field is clickable - without Entering username  ', () => {
        sign.clickSignIn()
        sign.clickForgotPassword();

    })

    it('Verify the " Forgot Password" field is clickable - with entering username ', () => {
        sign.clickSignIn()
        sign.setUserName("shwethaacharya15")
        sign.clickForgotPassword();

    })


    it('Verify the "Password" field is visible ', () => {
        sign.clickSignIn()
        sign.setUserName("shwethaacharya15")
        cy.xpath('//div[@class="position-relative"]/label')
        .contains('Password');
        
    })


    it('Verify the "Password" field is able to take values ', () => {
        sign.clickSignIn()
        sign.setUserName("shwethaacharya15")
        sign.setPassword("Shwethagithub@28")
        
    })


    it('Verify the "Sign in"  button is navigates to the home page ', () => {
        sign.clickSignIn()
        sign.setUserName("shwethaacharya15")
        sign.setPassword("Shwethagithub@28")
        sign.clickSubmit()
    
    })



})

describe('Page Object Model testsuite -  Home Page of the Github Account', () => { 


    
    beforeEach(() => {
        const sign = new SignIn;
        cy.visit('https://github.com'); // Visit the website
        sign.clickSignIn()
        sign.setUserName("shwethaacharya15")
        sign.setPassword("Shwethagithub@28")
        sign.clickSubmit()
        
    });
    const home=new SignIn;
    
    it.only('Verify the "Home page" title is visible ', () => {
        home.verifyLogin()
    })
    
    it.only('Verify the "Avatar image" is clickable' , () => {

   cy.xpath ( '//button[@class="Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0"] ')
   .click();
    })


    it.only('Verify the "Avatar image" is clickable' , () => {

        cy.xpath ( '//div[@class="Dialog__StyledBody-sc-uaxjsn-5 hCuruw"]/ul/li')
        .should('have.value', '')
         })




    
})

    


//General approach
/*
describe('Page Object Model testsuite -  Sign in of the Github Account', () => {

    beforeEach(() => {
        cy.visit('https://github.com'); // Visit the website
        
    });


    it('Sign in button is visible', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .should('be.visible');

    })


    it('Click Sign in button of the  Github account', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .click();

    })

    it('Verify the /"Sign in to Github/" title is visible or not ', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .click();
        cy.xpath('//div[@class="auth-form-header p-0"]/h1')
        .should('have.text', 'Sign in to GitHub');

    })

    it('Verify the /"Sign in to Github/" title is visible or not ', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .click();
        cy.xpath('//div[@class="auth-form-header p-0"]/h1')
        .should('have.text', 'Sign in to GitHub');

    })


    it('Verify the /"Username/" field is visible or not ', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .click();
        cy.xpath('//form/label')
        .contains('Username or email address');
        
    })

    it('Verify the /"Username/" field is able to take values ', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .click();
        cy.xpath('//form/input[@id="login_field"]')
        .type('shwethaacharya15')
        .click();
        
    })



    it('Verify the /" Forgot Password/" field is visible ', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .click();
        cy.xpath('//form/input[@id="login_field"]')
        .type('shwethaacharya15')
        cy.xpath('//div[@class="position-relative"]/a')
        .contains('Forgot password?');
    })


    it('Verify the /" Forgot Password/" field is visible ', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .click();
        cy.xpath('//form/input[@id="login_field"]')
        .type('shwethaacharya15')
        cy.xpath('//div[@class="position-relative"]/a')
        .click();
    })


    it('Verify the /"Password/" field is visible or not ', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .click();
        cy.xpath('//div[@class="position-relative"]/label')
        .contains('Password');
        
    })



    it('Verify the /"Password/" field is able to take values ', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .click();
        cy.xpath('//input[@id="password"]')
        .type('Shwethagithub@28')
        .click();
        
    })


    it('Verify the "Sign in"  button is navigates to the home page ', () => {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .click();
        cy.xpath('//form/input[@id="login_field"]')
        .type('shwethaacharya15')
        cy.xpath('//input[@id="password"]')
        .type('Shwethagithub@28')
        .click();
        cy.xpath('//input[@class="btn btn-primary btn-block js-sign-in-button"]')
        .click();
    
    })
   
    
}) */
