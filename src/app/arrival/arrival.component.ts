import { Component, OnInit } from '@angular/core';
import { Colonist, IOccupation } from '../shared/models';
import { Router } from '@angular/router'
import { ColonistService } from '../shared/services/colonist-services'
import { OccupationService } from '../shared/services/occupation-services'

@Component({
  moduleId: module.id,
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css']
})
export class ArrivalComponent implements OnInit {

	NO_OCCUPATION_SELECTED = '(none)'

	public occupations: IOccupation[];
	public colonist: Colonist;

  constructor(
  	private router: Router,
  	private colonistService: ColonistService,
  	private occupationService: OccupationService
	) {
  	this.colonist = new Colonist('', '', this.NO_OCCUPATION_SELECTED);
  	occupationService.getJobs().then(jobs => this.occupations = jobs);
  	}

  	onSubmit() {
  		this.colonistService.newColonist(this.colonist).then(colonist => {
  			this.router.navigate(['encounters']);
  		}).catch(error => {
  			// TODO: HANDLE ERROR
  		});
  	}

  	get noOccupation() {
  		return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
  	}

  	ngOnInit() {

  	}
}
