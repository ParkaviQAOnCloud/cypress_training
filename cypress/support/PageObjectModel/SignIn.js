class SignIn {

    
    clickSignIn() {
        cy.viewport(1280, 720);
        cy.xpath('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a')
        .click();

    }
    
    setUserName(username) {
        cy.xpath('//input[@id="login_field"]').type(username);
        

    }
    setPassword(password) {
        cy.xpath('//input[@id="password"]').type(password);

    }

    clickForgotPassword() {
        cy.xpath('//a[@class="label-link position-absolute top-0 right-0"]')
        .click();
    }
    clickSubmit(submit) {
        cy.xpath('//input[@class="btn btn-primary btn-block js-sign-in-button"]')
        .click();
    }

    verifyLogin() {
        cy.xpath('//span[@class="AppHeader-context-item-label  "]')
        .contains('Dashboard')
        .should('exist');
    }
}
export default SignIn;