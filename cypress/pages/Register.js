import loc from '../support/locators'

class Register {
    
    pushButtonRegister() {
        cy.get(loc.loginInput.classFormLogin).within(function () {
            cy.get(loc.registerBtn.btnRegister).click()
        })
    }

    fillRegister() { 
        
        cy.get(loc.registerBtn.classRegisterBtn).within(function () {
            cy.get(loc.registerInput.inputEmail).type("jonaslima2122@gmail.com", { force: true })
            cy.get(loc.registerInput.inputName).type("Miguel Setúbal", { force: true })
            cy.get(loc.registerInput.inputPass).type("Abc123456", { force: true })
            cy.get(loc.registerInput.inputPassConfirmation).type("Abc123456", { force: true })
        })
    }

    pushButtonRegister() {
        cy.get(loc.registerBtn.classRegisterBtn).within(function () {
            cy.get(loc.registerBtn.btnRegister).click({ force: true })
        })
    }

    closeMessageSucessRegister() {
        cy.get(loc.registerConfirmation.classRegisterConfirmation).within(function () {
            cy.get(loc.registerConfirmation.btnClose).click()
        })
    }

}

export default new Register