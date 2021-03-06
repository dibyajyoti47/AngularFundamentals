import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../events/common/ToastrService';

@Component({
  templateUrl: '/app/user/profile.component.html',
  styles:[`
    em {float:right; color:#E05C65;padding-left:10px;}
    .error input {background-color:#E3C3C5;}
  `]
})
export class ProfileComponent implements OnInit {
       profileForm : FormGroup;
       private firstName : FormControl;
       private lastName : FormControl;
       constructor(private authService : AuthService, 
                   private router : Router,
                   @Inject(TOASTR_TOKEN) private toastr : Toastr
      ){}
       ngOnInit(){
          this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
          this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
          this.profileForm = new FormGroup({
            firstName : this.firstName,
            lastName : this.lastName
          });
       }
       cancel(){
         this.router.navigate(['events']);
       }
       validateFirstName (): boolean{
         return this.firstName.valid || this.firstName.untouched;
       }
       validateLastName (): boolean{
        return this.lastName.valid || this.lastName.untouched;;
      }
       saveprofile(formValues){
         this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
         this.toastr.success('Profile Saved !');
        // this.router.navigate(['events']);
       }
}