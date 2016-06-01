import {Component} from '@angular/core';
import {Movie} from './model/movie';

@Component({
  selector: 'my-app',
  templateUrl: 'templates/movie.html'
})
export class AppComponent {
  public movie: Movie;

  public movies = MOVIES;

  constructor() {
    this.movie = {
      name: 'The Martian',
      year: 2015
    };
  }
}

var MOVIES: Movie[] = [
  {name: 'Back To The Future', year: 1985},
  {name: 'The Martian', year: 2015},
  {name: 'The Matrix', year: 1999},
  {name: 'The Notebook', year: 2004},
  {name: 'The Shawshank Redemption', year: 1994},
  {name: 'Iron Man', year: 2008},
  {name: 'Star Wars', year: 1977}
];
