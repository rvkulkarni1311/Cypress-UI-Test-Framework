import 'cypress-file-upload';

class FormsPage {
    // Locators
    formsButton = 'h5:nth-of-type(1)';  // just the tag (optional, text used in contains)
    infoMessage = 'div.col-12.mt-4.col-md-6';
    practiceForm = 'span.text';
    practiceFormHeader = 'h1.text-center';
    studentRegistrationForm = 'h5:nth-of-type(1)';
    FirstName = '#firstName';
    lastName = '#lastName';
    email = '#userEmail';
    radioOption = '#gender-radio-2';
    contactNumber = '#userNumber';
    dob = '#dateOfBirthInput';
    subjectsInput = '#subjectsInput';
    hobbies = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3'];
    chooseFile = "div > input[type='file']";
    address = '#currentAddress';
    state = '#state';
    selectState = '#react-select-3-option-3';
    city = '#city';
    selectCity = '#react-select-4-option-1';
    submitForm = '#submit';
    formValidationMessage = '#example-modal-sizes-title-lg';
    closeForm = '#closeLargeModal';
    // Methods
    clickFormsButton() {
        cy.contains(this.formsButton, 'Forms').should('be.visible').click();
        /*cy.get(this.formsButton, { timeout: 2000 })
          .then($el => {
            const visibleEl = $el.filter(':visible').first(); // pick the first visible element
            if (visibleEl.length) {
              cy.wrap(visibleEl).click();
            } else {
              cy.visit(bookStoreApp.goTo() + '/forms');
            }
          });*/
      }
      
      
    verifyInfoMessage() {
        cy.wait(10000);
        cy.contains(this.infoMessage).should('contain.text', 'Please select an item from left to start practice.');
    }
    redirecttoPracticeForm() {
        cy.contains(this.practiceForm, 'Practice Form').click();
    }
    validatePracticeContents() {
        cy.contains(this.practiceFormHeader, 'Practice Form').should('be.visible');
        cy.contains(this.studentRegistrationForm, 'Student Registration Form').should('be.visible');
    }
    enterStudentName(firstName, lastName) {
        cy.get(this.FirstName).type(firstName);
        cy.get(this.lastName).type(lastName);
    }
    enterEmailAndSelectGender(email, radioOption) {
        cy.get(this.email).type(email);
        cy.get('label').contains(radioOption).click();
    }
    enterContactAndDob(contactNumber, dateOfBirth) {
        dateOfBirth = dateOfBirth || '10 Jan 1990';
        cy.get(this.contactNumber).type(contactNumber);
        cy.get(this.dob).click().type(dateOfBirth + '{enter}');
    }
    enterSubjectsAndHobbies(hobbiesArray = []) {
        cy.get(this.subjectsInput).type('Math{enter}');

        // Map hobby names to selectors
        const hobbiesMap = {
            'Sports': '#hobbies-checkbox-1',
            'Reading': '#hobbies-checkbox-2',
            'Music': '#hobbies-checkbox-3'
        };
    
        // Loop through requested hobbies
        hobbiesArray.forEach(hobbyName => {
            const selector = hobbiesMap[hobbyName];
            if (selector) {
                cy.get(selector).check({ force: true });
            }
        });
    }
    uploadPicture() {
        // Ensure the input is in view and attach file from fixtures
        cy.get(this.chooseFile)
          .scrollIntoView()
          .selectFile('test.jpg'); // <-- file must be in cypress/fixtures
      
        cy.log('File uploaded');
      }
      
    enterAddressStateCity() {
        cy.get(this.address).type('HSR Layout');
        cy.get(this.state).click();
        cy.get(this.selectState).click();
        cy.get(this.city).click();
        cy.get(this.selectCity).click();
    }
    submitTheForm() {
        cy.get(this.submitForm).click({ force: true });
    }
    validateFormSubmission() {
        cy.get(this.formValidationMessage).should('contain.text', 'Thanks for submitting the form');
        cy.get(this.closeForm).click();
    }
}
export default FormsPage;
