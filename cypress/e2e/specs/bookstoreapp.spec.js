import BookStoreApp from '../../support/pageObjects/BookStoreApp';
describe('Book Store Application', () => {
    const bookStoreApp = new BookStoreApp();
    it('Login to Book Store', () => {
        //Visit the Book Store Application
        bookStoreApp.goTo();
        
    })
});
