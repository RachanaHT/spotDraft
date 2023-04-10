import { searchNadd } from "../support/pom_object/goodReads"

describe('add book to want to read and remove',()=>{
    before(()=>{
        cy.login()
    })
    after(()=>{
        cy.signOut()
    })
    it('TC01-add book to want to read',()=>{
        searchNadd.search()
        searchNadd.removeFromWantToRead()
    })
})
