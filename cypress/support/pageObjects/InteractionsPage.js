class InteractionsPage {
    //Locators
    InteractionsButton = 'h5';
    Sortable = 'span.text';
    ListTitle = '#demo-tab-list';
    GridTitle = '#demo-tab-grid';
    //Methods
    redirectToInteractionsPage() {
        cy.contains(this.InteractionsButton, 'Interactions').should('be.visible').click();
    }
    sortableOperations() {
        cy.contains(this.Sortable, 'Sortable').click();
        cy.get(this.ListTitle)
            .scrollIntoView()
            .should('be.visible')
            .and('have.text', 'List');

        cy.get(this.GridTitle)
            .scrollIntoView()
            .should('be.visible')
            .and('have.text', 'Grid');
    }
}
export default InteractionsPage;