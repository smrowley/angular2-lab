import {Component} from '@angular/core';
import {Movie} from './model/movie';
import {Input} from '@angular/core';

@Component({
  selector: 'movie-detail',
  templateUrl: 'templates/detail.html',
  styleUrls: ['styles/movies.css']
})
export class MovieDetailComponent {
  @Input()
  movie: Movie;
}
