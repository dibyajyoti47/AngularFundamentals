import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from './common/ToastrService';
import { ActivatedRoute } from '@angular/router';

@Component({
  //  selector: 'events-list',
    template: `<div>
    <h1>Upciming Angular Events</h1>
    <hr/>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail 
        [event]="event"
        (eventClick)="eventClickHandler($event)">
        
        </event-thumbnail>         
      </div>  
    </div>  
   </div>`
  //  <event-thumbnail  [event]="event1">
  //       </event-thumbnail>
  //(click)="handleClickForToastr(event.name)">
})
export class EventsListComponent implements OnInit{
    events : any;
    
    constructor(private eventService : EventService , 
                private toastrService : ToastrService,
                private activatedRoute : ActivatedRoute){     
    }

    ngOnInit () {
      this.events = this.activatedRoute.snapshot.data['events'];
    }

    event1 = {
        id : 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price:'299.99',
        imageUrl: 'app/assets/images/angularconnect-shield.png',
        location : {
            address: 'Bellandur',
            city : 'Bangalore',
            country : 'India'
        }
    };
      eventClickHandler(data){
          alert("received "+data);
      }
      handleClickForToastr(eventName){
        this.toastrService.error(eventName, 'sampleTitle');
      }
    
}