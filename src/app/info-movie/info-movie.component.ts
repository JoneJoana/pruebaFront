import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TMDBService } from '../_services/prueba-front.service';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.css']
})
export class InfoMovieComponent implements OnInit {

  movie: any;
  id: any;
  constructor(private _router: Router,private _route: ActivatedRoute,private tmdbService: TMDBService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    /* this.tmdbService.getMovieByID(this.id).subscribe(
      (response) => {
        this.character = response;
      },
      (error) => {
        console.log('Error al cargar datos');
      }
    ); */
  }

  onBack(): void{
    this._router.navigate(['/movies']);
  }

}
