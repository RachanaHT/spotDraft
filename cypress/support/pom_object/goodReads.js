export class searchAndwantRead{
    search(){
        cy.intercept('POST','https://www.goodreads.com/shelf/add_to_shelf').as('addtoShelf')
        cy.get('input[class="searchBox__input searchBox__input--currentlyReading"]').type('Wise and Otherwise{enter}')
        cy.get('table > tbody > tr:nth-child(1) > td:nth-child(2)').find('a>span').first().should('have.text','Wise and Otherwise')
        cy.get('table > tbody > tr:nth-child(1)').find('div.wtrUp.wtrLeft > form').click()
        cy.wait('@addtoShelf')
    }
    removeFromWantToRead(){
        cy.get('li.siteHeader__topLevelItem',{timeout:6000}).contains('My Books').click({force:true})
        cy.get('li.siteHeader__topLevelItem',{timeout:6000}).contains('My Books').click({force:true})
        cy.get(' table>tbody:nth-child(2)>tr:nth-child(1)')
          .find('td.field.actions > div > div > a > img').click()
        cy.get(' table>tbody:nth-child(2)>tr:nth-child(1)').should('not.exist')
    }
}
export const searchNadd = new searchAndwantRead()