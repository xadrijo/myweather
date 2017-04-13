import { WeatherPage } from './../weather/weather';
import { Weather } from './../../providers/weather';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  public defaultCity: string;
  public searchStr: string;
  public results: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private weatherProvider: Weather,
    private storage: Storage) {}

  ionViewDidLoad() {
    this.getDefaultCity();
    console.log('ionViewDidLoad SettingsPage');
  }

  getQuery() {
    this.weatherProvider.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      })
  }

  getDefaultCity() {
    this.storage.get('city').then((val) => {
      if(val != null) {
        this.defaultCity = val.name;
      } else {
        this.defaultCity = '';
      }
    })
  }

  setDefaultCity(city) {
    this.results = [];
    if (city !== 'undefined') {
      this.storage.set('city', city);
      this.searchStr = city.name;
      this.getDefaultCity();
    } else {
      console.log('LocalStorage Not Supported');
    }

  }

  saveChanges() {
    this.navCtrl.setRoot(WeatherPage);
  }

}
