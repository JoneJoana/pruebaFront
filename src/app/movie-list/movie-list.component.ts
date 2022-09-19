import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../_services/prueba-front.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies?: any;
  name = '';


  constructor(private tmdbService: TMDBService) {}

  ngOnInit() {
    //this.loadMovies();
  }

  /* loadMovies(): void {
    this.tmdbService.getMoviess()
      .subscribe(
        (response) => {
          this.movies = response;
          console.log(response);
        },
        (error) => {
          console.log('Error al cargar datos getCharacters' + error);
        }
      );
  }


  searchName(): void {
    this.tmdbService.findMovieByName(this.name)
      .subscribe(
        data => {
          this.movies = data;
          console.log(data);
        },
        error => {
          console.log(error + 'error searchName')
        }
      );
  } */
}
