import { Injectable } from '@angular/core';
import { IColonist } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ColonistService {
	
	colonistUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

	constructor(private http: Http){}

	getColonists(): Promise<IColonist[]> {
		return this.http.get(this.colonistUrl)
					.toPromise()
					.then(response=> response.json().colonists)
					.catch(this.handleError);
	}

	private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
