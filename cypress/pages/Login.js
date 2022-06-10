import loc from '../support/locators'

class Login {

    go(){
        cy.visit("https://bugbank.netlify.app/")

        it("o sistema deve está operante", function () {
            cy.get('h1[class="pages__Title-sc-1ee1f2s-4 cFmqIK"]').should('have.text', 'O banco com bugs e falhas do seu jeito')
        })
    }

    fillLogin() {
        cy.get(loc.loginInput.classFormLogin).within(function () {
            cy.get(loc.loginInput.inputEmail).type("jonaslima2122@gmail.com", { force: true })
            cy.get(loc.loginInput.inputPass).type("Abc123456", { force: true })
        })
    }

    pushButtonAcess() {
        cy.get(loc.loginBtn.classLoginBtn).within(function () {
            cy.get(loc.loginBtn.btnAccess).click({ force: true })
        })
    }

    confirmMessageLogin() {
        cy.get(loc.homePage.divMessageWelcome).should('contain', 'bem vindo ao BugBank :)')
    }


}

export default new Login;