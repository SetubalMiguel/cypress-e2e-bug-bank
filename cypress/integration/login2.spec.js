/// <reference types="cypress"/>

describe("Dado o site do BugBank", function () {
    before(function () {
        cy.visit("https://bugbank.netlify.app/")

        it("o sistema deve está operante", function () {
            cy.get('h1[class="pages__Title-sc-1ee1f2s-4 cFmqIK"]').should('have.text', 'O banco com bugs e falhas do seu jeito')
        })
    })

    context("dado que o site está operante", function () {

        before(function () {
            cy.get('div[class="login__buttons"]').within(function () {
                cy.get('button[type="button"]').click()
            })

            cy.get('div[class="card__register"]').within(function () {
                cy.get('input[name="email"]').type("jonaslima2122@gmail.com", { force: true })
                cy.get('input[name="name"]').type("Miguel Setúbal", { force: true })
                cy.get('input[name="password"]').type("Abc123456", { force: true })
                cy.get('input[name="passwordConfirmation"]').type("Abc123456", { force: true })
            })

            cy.get('form[class="styles__ContainerFormRegister-sc-7fhc7g-0 keVbpY"]').within(function () {
                cy.get('button[type="submit"]').click({ force: true })
            })

            cy.get('div[class="styles__ContainerInformations-sc-8zteav-3 fQkeSa"]').within(function () {
                cy.get('a[id="btnCloseModal"]').click()
            })
        })

        it("o usuário deve conseguir logar no sistema", function () {

            cy.get('div[class="card__login"]').within(function () {
                cy.get('input[type="email"]').type("jonaslima2122@gmail.com", { force: true })
                cy.get('input[type="password"]').type("Abc123456", { force: true })
            })

            cy.get('div[class="login__buttons"]').within(function () {
                cy.get('button[type="submit"]').click({ force: true })
            })

            cy.get('div[class="home__ContainerText-sc-1auj767-7 iDA-Ddb"]').should('contain', 'bem vindo ao BugBank :)')

        })
    })

})