import { Component, OnInit } from '@angular/core';
import { Encounter } from '../shared/models';
import { Router } from '@angular/router';
import { EncounterService } from '../shared/services/encounter-services';


@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css']
})
export class EncountersComponent implements OnInit {

	public encounters: Encounter[];


  constructor(
  	private router: Router,
  	private encounterService: EncounterService

  	) {
  	encounterService.getEncounters().then( encounters => this.encounters = encounters);
  	 }

  ngOnInit() {
  }

}
