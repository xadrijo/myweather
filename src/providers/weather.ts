import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Weather {
  public apiKey: string = '';
  public conditionsUrl: string = '';
  public searchUrl: string;

  constructor(private _http: Http) {
    this.apiKey = '8c819c2a659d84fb';
    this.conditionsUrl = 'http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q';
    this.searchUrl = 'http://localhost:8100/search/aq?query=';
  }

  getWeather(zmw) {
    return this._http.get(this.conditionsUrl+'/zmw:'+zmw+'.json')
      .map(res => res.json());
  }

  searchCities(searchStr) {
    return this._http.get(this.searchUrl+''+searchStr)
      .map(res => res.json());
  }

}
