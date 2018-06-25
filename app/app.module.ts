import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import { EventThumbnailCOmponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import {TOASTR_TOKEN , Toastr} from './events/common/ToastrService';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import {appRoutes} from './routes';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from "./events/event-details/create-session.component";
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './events/common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { JQ_TOKEN } from './events/common/jQuery.service';
import { SimpleModalComponent } from './events/common/simpleModal.component';
import { ModalTriggerDirective } from './events/common/modalTrigger.directive';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { VoterService } from './events/event-details/voter.service';
import { LocationValidator } from './events/event-details/locationValidator.directive';
import { HttpClientModule } from '@angular/common/http';
import { EventResolver } from './events/event-resolver.service';

let toastr : Toastr = window['toastr'];
let jQuery  = window['$'];

@NgModule({
    imports: [BrowserModule,
              FormsModule,
              ReactiveFormsModule,
              HttpClientModule,
              RouterModule.forRoot(appRoutes)  
        ],
    declarations: [EventsAppComponent,
                   EventsListComponent,
                   EventThumbnailCOmponent,
                   NavBarComponent,
                   EventDetailsComponent,
                   CreateEventComponent,
                   Error404Component,
                   CreateSessionComponent,
                   SessionListComponent,
                   CollapsibleWellComponent,
                   DurationPipe,
                   SimpleModalComponent,
                   ModalTriggerDirective,
                   UpvoteComponent,
                   LocationValidator
                ],
    bootstrap: [EventsAppComponent],
    providers: [
                EventListResolver,
                EventResolver,
                EventService,
                EventRouteActivator,
                AuthService,
                {provide:'canDeactivateCreateEvent',useValue:checkDirtyState},
                {provide:TOASTR_TOKEN,useValue:toastr},
                {provide:JQ_TOKEN,useValue:jQuery},
                VoterService
            ]
})

export class AppModule {

}
function checkDirtyState (component : CreateEventComponent){
    if(component.isDirty){
        return window.confirm('really ? ');
    }else{
        return true;
    }
    
}