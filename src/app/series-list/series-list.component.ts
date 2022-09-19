import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../_services/prueba-front.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series?: any;
  name = '';

  constructor(private tmdbService: TMDBService) {}

  ngOnInit() {
    //this.loadSeries();
  }

  /* loadSeries(): void {
    this.tmdbService.getSeries()
      .subscribe(
        (response) => {
          this.characters = response;
          console.log(response);
        },
        (error) => {
          console.log('Error al cargar datos getCharacters' + error);
        }
      );
  }


  searchName(): void {
    this.tmdbService.findByName(this.name)
      .subscribe(
        data => {
          this.characters = data;
          console.log(data);
        },
        error => {
          console.log(error + 'error searchName')
        }
      );
  } */
}
