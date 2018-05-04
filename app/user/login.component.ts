import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl : '/app/user/login.component.html',
    styles:[
        `em {float:right ; color: #E05C65; padding-left: 10px}`
    ]        
})
export class LoginComponent {
    username;
    password;
    constructor(private router : Router, private authService : AuthService){

    }
    login(formvalues){
        this.authService.loginUser(formvalues.username, formvalues.password)
        console.log(formvalues);
        this.router.navigate(['events']);
    }
    cancel(){
        this.router.navigate(['events']);
    }
}