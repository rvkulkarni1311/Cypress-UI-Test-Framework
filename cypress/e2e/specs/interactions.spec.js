import BookStoreApp from '../../support/pageObjects/BookStoreApp';
describe('Interactions Page', () => {
    const bookStoreApp = new BookStoreApp();
    
    it('redirect to interactions page', () => {
        //Visit the Book Store Application
        bookStoreApp.goTo();
        
    })
});
