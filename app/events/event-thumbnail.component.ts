import { Component, Input, Output, EventEmitter } from "@angular/core";




@Component({
    selector:'event-thumbnail',
    template:` <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date : {{event.date}}</div>
    <div>Time : {{event.time}}</div>
    <div>Price : Rs {{event.price}}</div>
    <div>
        <span>Location : {{event.location.address}}</span>
        <span class="pad-left"></span>
        <span>{{event.location.city}},{{event.location.country}}</span>
    </div>
    <button class ="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
 </div>`,
 styles:[
     `.pad-left {
         margin-left :10px;        
     }
     .well div {color : #bbb} 
     `
 ]
})
export class EventThumbnailCOmponent {
    @Input() event : any
    @Output() eventClick = new EventEmitter();
    
    someProperty : any = {prop : "SomeValue"};

    handleClickMe(){
        this.eventClick.emit("foo");
    }
    
    logFoo (){
        console.log("hey there..");
    }
}