import { TestBed, async } from '@angular/core/testing';

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'ng2-materialize';
import {MomentModule} from 'angular2-moment';
import { OwlModule } from 'ng2-owl-carousel';
import { TruncateModule } from 'ng2-truncate';
import { Parallax } from './directives/parallax.directive';
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

import {APP_BASE_HREF} from '@angular/common';

import { APIService } from './services/APIService';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        SourcesComponent,
        ArticleComponent,
        ErrorComponent,
        Parallax,
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
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /*
  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  })); */
});
