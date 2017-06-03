import { TestBed, async } from '@angular/core/testing';

import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'ng2-materialize';
import {MomentModule} from 'angular2-moment';
import { OwlModule } from 'ng2-owl-carousel';
import { TruncateModule } from 'ng2-truncate';
import { Parallax } from '../directives/parallax.directive';
import {BusyModule} from 'angular2-busy';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {APP_BASE_HREF} from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { SourcesComponent } from '../sources/sources.component';
import { ArticleComponent } from '../articles/articles.component';
import { ErrorComponent } from '../error/error.component';

import { SearchPipe } from '../pipes/searchPipe';

import { RouterModule } from '@angular/router';
import {APP_ROUTES} from '../routes';

import { APIService } from '../services/APIService';

describe('ArticleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
        OwlModule,
        TruncateModule,
        BrowserAnimationsModule,
        BusyModule,
        InfiniteScrollModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, APIService]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
