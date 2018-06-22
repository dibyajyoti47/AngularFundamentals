import { Component, Input, OnChanges } from "@angular/core";
import { ISessions } from "../shared/event.model";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";


@Component({
    selector : 'session-list',
    templateUrl : 'app/events/event-details/session-list.component.html'
})
export  class SessionListComponent implements OnChanges{
    @Input() sessions: ISessions[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions : ISessions [] = [];
    
    constructor(
        private auth : AuthService,
        private voterService : VoterService
    ){}

    ngOnChanges(){
        if(this.sessions){
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? 
                this.visibleSessions.sort(sortByNameAsc) 
                : this.visibleSessions.sort(sortByVotesDesc) ;
        }

    }
    filterSessions (filter)  {
        if (filter === 'all'){
            this.visibleSessions = this.sessions.slice(0);
        }else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLowerCase() === filter;
            });
        }
    }
    toggleVote (session : ISessions) {
      if(this.userHasVoted(session)){
        this.voterService.deleteVoter(session, this.auth.currentUser.userName);
      }else{
        this.voterService.addVoter(session, this.auth.currentUser.userName);
      }
      if(this.sortBy === 'votes'){
          this.visibleSessions.sort(sortByVotesDesc);
      }  
    }
    userHasVoted(session : ISessions){
        return this.voterService.userHasVoted(session,this.auth.currentUser.userName);
    }
}
function sortByNameAsc(s1 : ISessions, s2: ISessions){
    if(s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1 ;
}
function sortByVotesDesc(s1 : ISessions, s2: ISessions){
    return s2.voters.length - s1.voters.length ;
}