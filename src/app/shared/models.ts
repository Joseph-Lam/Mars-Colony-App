export interface IAlien {
	Atype: string;
	submitted_by: number;
	description: string;
}

export interface IOccupation {
	name: string;
	description: string;
}

export interface IColonist {
	name: string;
	job: IOccupation;
	age: number;
}

export interface IEncounters {
	date: number;
	colonist_id: number;
	atype: string;
	action: string;
}