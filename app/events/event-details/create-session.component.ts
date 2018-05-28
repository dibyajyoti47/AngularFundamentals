import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ISessions } from "../shared/event.model";
import { restrictedWords } from "../shared/restricted-words.validators";

@Component({
    templateUrl : 'app/events/event-details/create-session.component.html',
    styles:[`
    em {float:right; color:#E05C65;padding-left:10px;}
    .error input {background-color:#E3C3C5;}
  `]  
})
export class CreateSessionComponent implements OnInit{
   
    newSessionForm : FormGroup;
    name : FormControl;
    presenter : FormControl;
    duration : FormControl;
    level : FormControl;
    abstract : FormControl;
    
    ngOnInit(){
        this.name = new FormControl('',Validators.required);
        this.presenter = new FormControl('',Validators.required);
        this.duration = new FormControl('',Validators.required);
        this.level = new FormControl('',Validators.required);
        this.abstract = new FormControl('',[Validators.required, Validators.maxLength(400), restrictedWords(['foo','bar'])]);
        
        this.newSessionForm = new FormGroup({
            name : this.name,
            presenter : this.presenter,
            duration : this.duration,
            level : this.level,
            abstract : this.abstract
        })
    }
    saveSession(formValues){
        let session : ISessions = {
            id:undefined,
            name : formValues.name,
            presenter : formValues.presenter,
            duration : +formValues.duration,
            level : formValues.level,
            abstract : formValues.abstract,
            voters : []
        }
    }
    
}