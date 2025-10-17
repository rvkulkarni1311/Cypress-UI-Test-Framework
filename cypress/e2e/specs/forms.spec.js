import BookStoreApp from '../../support/pageObjects/BookStoreApp';
import FormsPage from '../../support/pageObjects/FormsPage';
describe('Forms Page Features', () => {
    const bookStoreApp = new BookStoreApp();
    const formsPage = new FormsPage();
    it('redirect to forms page', () => {
        //Visit the Book Store Application
        bookStoreApp.goTo();
        formsPage.clickFormsButton();
        //formsPage.verifyInfoMessage();
        formsPage.redirecttoPracticeForm();
        formsPage.validatePracticeContents();
        formsPage.uploadPicture();
        formsPage.enterStudentName('John', 'Doe');
        formsPage.enterEmailAndSelectGender('jDoe@example.us', 'Male');
        formsPage.enterContactAndDob('9876543210', '15 Aug 1995');
        formsPage.enterSubjectsAndHobbies( ['Sports', 'Reading']);
        formsPage.enterAddressStateCity();
        formsPage.submitTheForm();
        formsPage.validateFormSubmission();
    })
});
