const locators = {

    loginBtn: {
        btnAccess: 'button[type="submit"]',
        btnRegister: 'button[type="button"]',
        classLoginBtn: 'div[class="login__buttons"]'
    },

    loginInput: {
        inputEmail: 'input[type="email"]',
        inputPass: 'input[type="password"]',
        classFormLogin: 'div[class="card__login"]'
    },

    registerInput: {
        inputEmail: 'input[name="email"]',
        inputName: 'input[name="name"]',
        inputPass: 'input[name="password"]',
        inputPassConfirmation: 'input[name="passwordConfirmation"]',
        classFormRegister: 'div[class="card__register"]'

    },

    registerBtn: {
        btnRegister: 'button[type="submit"]',
        classRegisterBtn: 'form[class="styles__ContainerFormRegister-sc-7fhc7g-0 keVbpY"]'
    },

    registerConfirmation: {
        btnClose: 'a[id="btnCloseModal"]',
        classRegisterConfirmation: 'div[class="styles__ContainerInformations-sc-8zteav-3 fQkeSa"]'
    },

    homePage: {
        divMessageWelcome: 'div[class="home__ContainerText-sc-1auj767-7 iDA-Ddb"]',
        divNav: 'div[class="home__Header-sc-1auj767-1 cVGUzT"]',
        ButtonLogout: 'a[id="btnExit"]'
    }

}

export default locators