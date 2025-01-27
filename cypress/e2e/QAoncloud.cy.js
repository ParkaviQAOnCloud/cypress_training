describe('QAonCloud Home Page Tests - Part 1', () =>{ 
    
    // Visit the homepage before each test (cypress Hooks)
    beforeEach(() => {

        cy.visit('https://qaoncloud.com/');
      })


      it('Verify Header Elements', () => {
         
        //verify the dropdown
        cy.xpath('//ul[@id="menu-qa-menu"]')
          .should('contain', 'Services')
          .and('contain', 'Solutions')
          .and('contain', 'Industries')
          .and('contain', 'Insights');

         cy.xpath('//span[@class="elementor-button-text"]')
        .contains('Contact Us')
        .should('be.visible');
          });


           // Verify banner text
      it('Verify Banner Section', () => {
      
      cy.get('.elementor-element-9814d64 > :nth-child(1)')
      .should('be.visible');
        });

     //verify "we love to help" section
   it('Verify "We Love To Help Craft Quality Software" Section', () => {
    cy.contains('We Love To Help Craft Quality Software')
    .scrollIntoView()
    .should('be.visible');
   })


   // Verify footer links
   it('Verify Footer Elements', () => {
    cy.xpath('//section[contains(@class,"elementor-section elementor-top-section elementor-element elementor-element-b046965 elementor-section-boxed elementor-section-height-default elementor-section-height-default")]')
    .scrollIntoView()
    .should('be.visible');

    cy.xpath('//div[@class="elementor-element elementor-element-b7925ff elementor-widget elementor-widget-heading"]')
    .should('contain', 'Company')

    cy.xpath('//a[contains(@href,"/about-us")]//div[contains(@class,"ekit_page_list_content")]//span[contains(@class,"elementor-icon-list-text")]')
    .should('contain','About Us');

    });

  //Verify Contact Us button is Clickable
    it('Verify Contact Us button is Clickable', () => {
    
    cy.get('.elementor-button-text')
   .click();
    
    });


    //Verify Learn more button- above is Clickable
    it('Verify Learn more button- above is Clickable', () => {
    
        cy.xpath('//*[@id="rect-5371"]')
       .click();
        
        });

          
        //Verify Learn more button- below is Clickable
        it('Verify Learn more button- below is Clickable', () => {
    
            cy.xpath(' //*[@id="content-mkt"]/div/div[1]/div/div[3]/div/div/a')
            .scrollIntoView()
            .should('be.visible')
            .click();
              
            });

           //Verify Talk to expert button- below is Clickable
            it('Verify Talk to expert button- below is Clickable', () => {
    
                cy.xpath('//a[@class="octf-btn octf-btn-primary octf-btn-icon"]')
                .scrollIntoView()
                .should('be.visible')
                .click();
                  
                });
         
})

//Verify the Contact Us Page Field
describe('Contact Us Page Field', () => {
    
    beforeEach(() => {
        cy.visit('https://qaoncloud.com/');
        cy.get('.elementor-button-text')
        .click();
    })


    it('Verify the title of that page', () => {
        cy.xpath("//div[@class='title']//div[contains(text(), 'Get in Touch')]")
       .should('contain.text', 'Get in Touch')
        .and('contain.text', 'with Us Today');

    })

})