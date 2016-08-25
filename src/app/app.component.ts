import { Component } from '@angular/core';
import { AlienService } from './shared/services/alien-services';
import { OccupationService} from './shared/services/occupation-services';
import { ColonistService} from './shared/services/colonist-services';
import { EncounterService} from './shared/services/encounter-services';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ AlienService, OccupationService, ColonistService, EncounterService ],
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES], 

})
export class AppComponent {

  constructor(alienService: AlienService, occupationService: OccupationService, colonistService: ColonistService, encounterService: EncounterService) {
  	console.log(alienService);
	console.log(occupationService);
	console.log(colonistService);
	console.log(encounterService);
	
	}
}
