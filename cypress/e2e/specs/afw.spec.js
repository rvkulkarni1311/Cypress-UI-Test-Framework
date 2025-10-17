import BookStoreApp from '../../support/pageObjects/BookStoreApp';
describe('Manage Alerts,Frame and windows', () => {
    const bookStoreApp = new BookStoreApp();
    
    it('redirect to afw page', () => {
        //Visit the Book Store Application
        bookStoreApp.goTo();
        
    })
});