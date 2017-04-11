import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Weather {
  apiKey: string = '';
  conditionsUrl: string = '';

  constructor(private _http: Http) {
    this.apiKey = '8c819c2a659d84fb';
    this.conditionsUrl = 'http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q';
  }

  getWeather(city, state) {
    return this._http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  }

}
