import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APIService } from '../services/APIService';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Subscription} from "rxjs";
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sources: any = [];
  usaToday: Array<string> = [];
  techCrunch: Array<string> = [];
  businessInsider: Array<string> = [];
  espn: Array<string> = [];
  mashable: Array<string> = [];
  ign: Array<string> = [];
  mtvNews: Array<string> = [];
  nationalG: Array<string> = [];
  busy: Subscription;
  extraHidden: boolean = true;
  isLoading: boolean = false;

  constructor(private _apiService: APIService, private titleService: Title, private router: Router) {
    this.titleService.setTitle( "News Bash - Home" );
  }

  ngOnInit() {

    /*
     Get all news sources
     */
    this.getSources();

    /*
     Get first homepage articles
     */
    this.getPopularSourceArticles();
  }

  getSources() {
    /*
     Get all news sources
     */
    this._apiService.getSources().subscribe(
      data => {
        this.sources = this.sources.concat(data.sources);
        this.sources = _.shuffle(this.sources);
        this.sources = this.sources.slice(0,10);
      },
      err => console.error(err),
      () => {
        console.log("Sources data", this.sources);
      }
    );
  }

  getPopularSourceArticles() {
    /*
     Get first homepage articles
     */
    this.busy = this._apiService.getHomePageArticles().subscribe(
      data => {
        this.usaToday = data[0].articles;
        this.techCrunch = data[1].articles;
        this.businessInsider = data[2].articles;
        this.espn = data[3].articles;
      },
      err => console.error(err),
      () => {
        console.log("Daily News Data", this.usaToday);
      }
    );
  }


  /*
    Triggered from NGX Scroll Load Second Half of News
   */
  getMoreArticles() {

    if (this.extraHidden) {
      this.isLoading = false;
      this.extraHidden = false;
      this.getExtras();
    }

  }

  getExtras() {
    /*
     Get extra news sources
     */
    this.busy = this._apiService.getExtraHomePageArticles().subscribe(
      data => {
        this.mashable = data[0].articles;
        this.ign = data[1].articles;
        this.mtvNews = data[2].articles;
        this.nationalG = data[3].articles;
      },
      err => console.error(err),
      () => {
        console.log("Extra News Data Loaded");
        this.isLoading = true;
      }
    );
  }


}
