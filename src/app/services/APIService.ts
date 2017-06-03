import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class APIService {
  constructor(private http:Http) { }

  server = "https://newsapi.org/v1/";
  apiKey = "20f3de178d994258ae073833356a7b51";

  getSources() {
    return this.http.get(this.server + 'sources').map((res:Response) => res.json());
  }

  getSourcesByLang(lang) {
    return this.http.get(this.server + 'sources?language=' + lang).map((res:Response) => res.json());
  }

  getSourcesByCountry(country) {
    return this.http.get(this.server + 'sources?country=' + country).map((res:Response) => res.json());
  }

  getNewsArticlesBySource(source, sort) {
    return this.http.get(this.server + 'articles/?apiKey=' + this.apiKey + '&source=' + source + '&sortBy=' + sort).map((res:Response) => res.json());
  }

  getHomePageArticles() {
    return Observable.forkJoin(
      this.http.get(this.server + 'articles/?apiKey=' + this.apiKey + '&source=usa-today&sortBy=top').map((res:Response) => res.json()),
      this.http.get(this.server + 'articles/?apiKey=' + this.apiKey + '&source=techcrunch&sortBy=top').map((res:Response) => res.json()),
      this.http.get(this.server + 'articles/?apiKey=' + this.apiKey + '&source=business-insider&sortBy=top').map((res:Response) => res.json()),
      this.http.get(this.server + 'articles/?apiKey=' + this.apiKey + '&source=espn&sortBy=top').map((res:Response) => res.json())
    );
  }

  getExtraHomePageArticles() {
    return Observable.forkJoin(
      this.http.get(this.server + 'articles/?apiKey=' + this.apiKey + '&source=mashable&sortBy=top').map((res:Response) => res.json()),
      this.http.get(this.server + 'articles/?apiKey=' + this.apiKey + '&source=ign&sortBy=top').map((res:Response) => res.json()),
      this.http.get(this.server + 'articles/?apiKey=' + this.apiKey + '&source=mtv-news&sortBy=top').map((res:Response) => res.json()),
      this.http.get(this.server + 'articles/?apiKey=' + this.apiKey + '&source=national-geographic&sortBy=top').map((res:Response) => res.json())
    );
  }
}
