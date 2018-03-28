import { Component, Input, Output, EventEmitter } from "@angular/core";




@Component({
    selector:'event-thumbnail',
    template:` <div [routerLink]="[event.id]" class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>    
    <div>Date : {{event.date}}</div>
    <div [ngClass]="getClass()" [ngSwitch]="event?.time">Time : {{event.time}}    
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price : Rs {{event.price}}</div>
    <div>
        <span>Location : {{event.location.address}}</span>
        <span class="pad-left"></span>
        <span>{{event.location.city}},{{event.location.country}}</span>
    </div>
    <button class ="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
 </div>`,
 
 //<div [class.bold]="event?.time === '8:00 am'"  [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">Time : {{event.time}}    
 //<div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}" [ngSwitch]="event?.time">Time : {{event.time}}

 styles:[
     `
     .green {color: green !important}
     .bold {font-weight : bold}
     .thumbnail { min-height :210px ;}
     .pad-left {
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
    getClass(){
        if(this.event.time && this.event.time === '8:00 am'){
            return ['green : true' , 'bold : true'];
        }else{
            return [];
        }
    }
}