import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { ISessions } from "../shared/event.model";

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left : 20px; padding-right: 20px ;}
        .event-image {height: 100px ;}
        a {cursor : pointer}
        `]
})
export class EventDetailsComponent implements OnInit {
    event : any;
    addMode : boolean;
    filterBy : string = 'all';
    sortBy : string = 'name';
    constructor(private eventService : EventService, private route: ActivatedRoute){
    }
    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
    addSession(){
        this.addMode = true;
    }
    saveNewSession(session : ISessions){
        const nextId = Math.max.apply(null, this.event.sessions.map(
            s => s.id
        ));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }
    cancelAddSession(){
        this.addMode = false;
    }
}