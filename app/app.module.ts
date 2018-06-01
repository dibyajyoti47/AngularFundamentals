import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import { EventThumbnailCOmponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './events/common/ToastrService';
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


@NgModule({
    imports: [BrowserModule,
              FormsModule,
              ReactiveFormsModule,
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
                   SessionListComponent
                ],
    bootstrap: [EventsAppComponent],
    providers: [
                EventListResolver,
                EventService, 
                ToastrService, 
                EventRouteActivator,
                AuthService,
                {provide:'canDeactivateCreateEvent',useValue:checkDirtyState}
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