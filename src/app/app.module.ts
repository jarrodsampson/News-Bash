import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'ng2-materialize';
import {MomentModule} from 'angular2-moment';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlModule } from 'ng2-owl-carousel';
import { TruncateModule } from 'ng2-truncate';
import { Parallax } from './directives/parallax.directive';
import {NgPipesModule} from 'ngx-pipes';
import {BusyModule} from 'angular2-busy';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeComponent } from './home/home.component';
import { SourcesComponent } from './sources/sources.component';
import { ArticleComponent } from './articles/articles.component';
import { ErrorComponent } from './error/error.component';

import { AppComponent } from './app.component';

import { SearchPipe } from './pipes/searchPipe';

import { RouterModule } from '@angular/router';
import {APP_ROUTES} from './routes';

import { APIService } from './services/APIService';
import { LocalService } from './services/LocalService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SourcesComponent,
    ArticleComponent,
    Parallax,
    ErrorComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    MaterializeModule.forRoot(),
    MomentModule,
    NgxPaginationModule,
    OwlModule,
    TruncateModule,
    NgPipesModule,
    BrowserAnimationsModule,
    BusyModule,
    InfiniteScrollModule
  ],
  providers: [APIService, Title, LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
