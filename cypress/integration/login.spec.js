/// <reference types="cypress"/>

import login from "../pages/Login"
import register from "../pages/Register"

describe("Dado o site do BugBank", function () {    

    beforeEach(function () {      
        login.go()                
        register.pushButtonRegister()
        register.fillRegister()
        register.pushButtonRegister()
        register.closeMessageSucessRegister()

    })
   
    context("dado que o site está operante", function () {    
         
        

        it("o usuário deve conseguir logar no sistema", function () {            
            login.fillLogin()
            login.pushButtonAcess()
            login.confirmMessageLogin()

        })
    })


})