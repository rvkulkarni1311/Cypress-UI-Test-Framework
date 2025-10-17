import BookStoreApp from '../../support/pageObjects/BookStoreApp';
describe('Widgets Page', () => {
    const bookStoreApp = new BookStoreApp();
    
    it('redirect to widgets page', () => {
        //Visit the Book Store Application
        bookStoreApp.goTo();
        
    })
});