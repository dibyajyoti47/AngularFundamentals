import { Component } from "@angular/core";
import { Router } from "@angular/router";



@Component({
    template:`
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6"></div>
        <h3>[Create Event Form will from here.]</h3>
        <br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-defualt" (click)="cancel()">Cancel</button>
    `
})
export class CreateEventComponent {

    isDirty : boolean = true;

    constructor(private router : Router){

    }
    cancel(){
        this.router.navigate(['/events']);
    }
}