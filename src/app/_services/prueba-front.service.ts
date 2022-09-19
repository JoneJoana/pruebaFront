import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Serie } from '../models/serie.model';

const BASE = 'https://api.themoviedb.org/3/';
const API_KEY = 'cf5b7083b6fd3be488d414abc816e750';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {

  constructor(private http: HttpClient) { }


  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(BASE+"movie/popular?api_key="+API_KEY);
  }

  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(BASE+"tv/popular?api_key="+API_KEY);
  }

  getMovieByID(id: any): Observable<Movie>{
    return this.http.get<Movie>(`${BASE}/${id}`+"?api_key="+API_KEY);
  }

  getSerieByID(id: any): Observable<Serie>{
    return this.http.get<Serie>(`${BASE}/${id}`+"?api_key="+API_KEY);
  }

  findMovieByName(name: string): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${BASE}?name=${name}`+"?api_key="+API_KEY);
  }

  findSerieByName(name: string): Observable<Serie[]>{
    return this.http.get<Serie[]>(`${BASE}?name=${name}`+"?api_key="+API_KEY);
  }

}

