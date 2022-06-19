/// <reference types="cypress"/>

import login from "../pages/Login"
import register from "../pages/Register"
import home from "../pages/Home"

describe("Dado o site do BugBank", function () {    
    
    before(function(){
        login.go() 
    })
   
    context("se o site está operante", function () {    

        before(function () {   
                           
            register.pushButtonRegister()
            register.fillRegister()
            register.pushButtonRegister()
            register.closeMessageSucessRegister()
    
        })
        
        it("se for informado dados válidos, o usuário deve conseguir logar no sistema", function () {            
            login.fillLogin('jonaslima2122@gmail.com', 'Abc123456')
            login.pushButtonAcess()
            login.confirmMessageLogin()
            home.pushButtonLogout()

        })
    
        it("se for informado dados invalidos, deve ser mostrado uma mensagem de erro para o usuário", function () {            
            login.fillLogin('teste2122@gmail.com', 'qwerty123')
            login.pushButtonAcess()
            login.confirmMessageErroLogin()
            login.pushButtonErroLogin()

        })

        it("se for informado o Email errado, deve ser mostrado uma mensagem de erro para o usuário", function () {            
            login.fillLogin('teste2122@gmail.com', 'Abc123456')
            login.pushButtonAcess()
            login.confirmMessageErroLogin()
            login.pushButtonErroLogin()
            
        })

        it("e for informado a Senha errada, deve ser mostrado uma mensagem de erro para o usuário", function () {            
            login.fillLogin('jonaslima2122@gmail.com', 'qwerty123')
            login.pushButtonAcess()
            login.confirmMessageErroLogin()
            login.pushButtonErroLogin()
            
            
        })
    
    })

})