import BookStoreApp from '../../support/pageObjects/BookStoreApp';
import InteractionsPage from '../../support/pageObjects/InteractionsPage';

describe('Interactions Page', () => {
    const bookStoreApp = new BookStoreApp();
    const interactions = new InteractionsPage();
    it('redirect to interactions page', () => {
        //Visit the Book Store Application
        bookStoreApp.goTo();
        interactions.redirectToInteractionsPage();
        interactions.sortableOperations();
        // interactions.selectableOperations();
        // interactions.resizableOperations();
        // interactions.draggableOperations();
        // interactions.droppableOperations();

        
    })
});
