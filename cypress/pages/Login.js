import loc from '../support/locators'

class Login {

    go(){
        cy.visit("https://bugbank.netlify.app/")

        it("o sistema deve está operante", function () {
            cy.get('h1[class="pages__Title-sc-1ee1f2s-4 cFmqIK"]').should('have.text', 'O banco com bugs e falhas do seu jeito')
        })
    }

    fillLogin(email, pass) {
        cy.get(loc.loginInput.classFormLogin).within(function () {
            cy.get(loc.loginInput.inputEmail).clear({ force: true }).type(email, { force: true })
            cy.get(loc.loginInput.inputPass).clear({ force: true }).type(pass, { force: true })
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

    confirmMessageErroLogin() {
        cy.get('div[class="styles__ContainerContent-sc-8zteav-1 cSdWPv"]').within(function (){
            cy.get('p[id="modalText"]').should('have.text', 'Usuário ou senha inválido.\nTente novamente ou verifique suas informações!')
        })
        
    }

    pushButtonErroLogin() {
        cy.get('div[class="styles__ContainerContent-sc-8zteav-1 cSdWPv"]').within(function () {
            cy.get('a[id="btnCloseModal"]').click()
        })
    }


}

export default new Login;