import {Component} from '@angular/core';

@Component({
    selector: 'events-list',
    template: `<div>
    <h1>Upciming Angular Events</h1>
    <hr/>
    <event-thumbnail 
        [event]="event1"
        (eventClick)="eventClickHandler($event)">
        </event-thumbnail>
   </div>`
})
export class EventsListComponent {
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
}