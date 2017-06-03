import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APIService } from '../services/APIService';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticleComponent implements OnInit {

  articles: Array<string> = [];
  source: string = "";
  busy: Subscription;

  constructor(private _apiService: APIService, private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {
    this.titleService.setTitle( "Articles - News Bash" );
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.source = params['source'];
      this.titleService.setTitle( "Articles - " + this.source + ' - News Bash' );
      console.log(this.source);
    });


    /*
     Get all news sources
     */
    this.getArticles(this.source);

  }

  getArticles(source) {
    /*
     Get all news sources
     */
    this.busy = this._apiService.getNewsArticlesBySource(source, "top").subscribe(
      data => {
        this.articles = this.articles.concat(data.articles);
      },
      err => console.error(err),
      () => {
        console.log("Article data", this.articles);
      }
    );
  }

  goBack() {
    window.history.back();
  }

  refresh() {
    /*
     Get all news sources
     */
    this.articles = [];
    this.getArticles(this.source);
  }

}
