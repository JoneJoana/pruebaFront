import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { InfoMovieComponent } from './info-movie/info-movie.component';
import { InfoSerieComponent } from './info-serie/info-serie.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'series', component: SeriesListComponent },
  { path: 'movies/info/:id', component: InfoMovieComponent },
  { path: 'series/info/:id', component: InfoSerieComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
