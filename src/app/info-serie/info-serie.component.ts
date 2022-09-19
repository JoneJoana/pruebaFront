import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TMDBService } from '../_services/prueba-front.service';

@Component({
  selector: 'app-info-serie',
  templateUrl: './info-serie.component.html',
  styleUrls: ['./info-serie.component.css']
})
export class InfoSerieComponent implements OnInit {

  serie: any;
  id: any;
  constructor(private _router: Router,private _route: ActivatedRoute,private tmdbService: TMDBService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
     /* this.tmdbService.getSerieByID(this.id).subscribe(
      (response) => {
        this.character = response;
      },
      (error) => {
        console.log('Error al cargar datos');
      }
    );  */
  }

  onBack(): void{
    this._router.navigate(['/movies']);
  }

}
