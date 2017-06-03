import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
@Injectable()
export class LocalService {
  constructor(private http:Http) { }

  getCategories() {
    return this.http.get('assets/local/categories.json').map((res:Response) => res.json());
  }

  getLanugages() {
    return this.http.get('assets/local/languages.json').map((res:Response) => res.json());
  }

  getCountries() {
    return this.http.get('assets/local/countries.json').map((res:Response) => res.json());
  }
}
