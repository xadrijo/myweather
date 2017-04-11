import { Weather } from './../../providers/weather';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  public city: string;
  public state: string;
  public weather: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private weatherService: Weather) {
      
      this.city = 'Boston';
      this.state = 'MA';
    }

  ionViewDidLoad() {
    this.weatherService.getWeather(this.city, this.state)
      .subscribe(res => {
        this.weather = res.current_observation;
      });
  }
}
