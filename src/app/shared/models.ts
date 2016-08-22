interface IAliens {
	Atype: string;
	submitted_by: number;
	description: string;
}

interface IOccupation {
	name: string;
	description: string;
}

interface IColonist {
	name: string;
	job: IOccupation;
	age: number;
}

interface IEncounters {
	date: number;
	colonist_id: number;
	atype: string;
	action: string;
}