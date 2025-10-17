
class BookStoreApp {
    
    goTo() {
        cy.visit(Cypress.config('url'));
    }
    
}

export default BookStoreApp;