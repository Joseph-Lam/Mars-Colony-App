import { Component, OnInit } from '@angular/core';
import { IAlien, Encounter  } from '../shared/models';
import { Router } from '@angular/router';
import { AlienService } from '../shared/services/alien-services'
import { EncounterService } from '../shared/services/encounter-services'


@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css']
})
export class ReportComponent {

	NO_ALIENS_SELECTED = '(none)';

	public aliens: IAlien[];
	public encounter: Encounter;

  constructor(
  	private router: Router,
  	private alienService: AlienService,
  	private encounterService: EncounterService
  	) { 
  	this.encounter = new Encounter ('', '', '', '100');

  	alienService.getAliens().then(aliens => this.aliens = aliens );
  	}


  	onSubmit() {
  		this.encounterService.newEncounter(this.encounter).then(encounter => {
  			this.router.navigate(['/encounters']);
  		}).catch(error => {
  		  
  		});
  	}

  	get noEncounter() {
  		return this.encounter.atype === this.NO_ALIENS_SELECTED;
  	}

    ngOnInit() {}


}
