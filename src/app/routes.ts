import { HomeComponent } from './home/home.component';
import { SourcesComponent } from './sources/sources.component';
import { ArticleComponent } from './articles/articles.component';
import { ErrorComponent } from './error/error.component';

export const APP_ROUTES = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'sources',
    component: SourcesComponent,
    pathMatch: 'full'
  },
  {
    path: 'articles/:source',
    component: ArticleComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'error404',
    component: ErrorComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/error404'
  }
];
