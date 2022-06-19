import loc from '../support/locators'

class Home {

    pushButtonLogout() {
        cy.get(loc.homePage.divNav).within(function () {
            cy.get(loc.homePage.ButtonLogout).click({ force: true })
        })
    }

}

export default new Home;