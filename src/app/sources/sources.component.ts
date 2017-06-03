import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APIService } from '../services/APIService';
import { LocalService } from '../services/LocalService';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Subscription} from "rxjs";
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  sources: Array<string> = [];
  categories: Array<string> = [];
  countries: Array<string> = [];
  languages: Array<string> = [];
  searchArr: Array<string> = [];
  busy: Subscription;
  search = {
    name: ""
  };
  searchObj = {
    "language": "en",
    "category": "general",
    "country": "us"
  };

  constructor(private _apiService: APIService, private _localService: LocalService, private titleService: Title, private router: Router) {
    this.titleService.setTitle( "Sources - News Bash" );
  }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    /*
     Get all news sources
     */
    this.getSources();

    /*
     Get all categories
     */
    this.getCategories();

    /*
     Get all languages
     */
    this.getLanugages();

    /*
     Get all countries
     */
    this.getCountries();
  }

  getSources() {
    /*
     Get all news sources
     */
    this.busy = this._apiService.getSources().subscribe(
      data => {
        this.sources = this.sources.concat(data.sources);
        this.searchArr = this.sources;
      },
      err => console.error(err),
      () => {
        console.log("Sources data", this.sources);
      }
    );
  }

  getCategories() {
    this._localService.getCategories().subscribe(data => {
        this.categories = data;
      },
      err => console.error(err),
      () => {
        console.log("Categories data", this.categories);
    });
  }

  getLanugages() {
    this._localService.getLanugages().subscribe(data => {
        this.languages = data;
      },
      err => console.error(err),
      () => {
        console.log("Language data", this.languages);
    });
  }

  getCountries() {
    this._localService.getCountries().subscribe(data => {
        this.countries = data;
      },
      err => console.error(err),
      () => {
        console.log("Countries data", this.countries);
    });
  }

  onSourceClick(source) {
    console.log(source);
    this.router.navigate(['./articles/' + encodeURI(source.id)]);
  }

  onSearchLanguage(lang) {

    this.searchObj.language = lang;
    this.searchArr = _.where(this.sources, {language: this.searchObj.language});
  }

  onSearchCategory(category) {

    this.searchObj.category = category;
    this.searchArr = _.where(this.sources, {category: this.searchObj.category});
  }

  onSearchCountry(country) {
    this.searchObj.country = country;
    this.searchArr = _.where(this.sources, {country: this.searchObj.country});
  }

  searchReset() {
    this.searchArr = this.sources;
    this.search.name = "";
  }

}
