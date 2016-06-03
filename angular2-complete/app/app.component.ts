import {Component} from '@angular/core';
import {Movie} from './model/movie';
import {SearchPipe} from './search.pipe';
import {MovieDetailComponent} from './movie-detail.component';
import {MovieService} from './movie.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'templates/movie.html',
  styleUrls: ['styles/movies.css'],
  pipes: [SearchPipe],
  directives: [MovieDetailComponent],
  providers: [MovieService]
})
export class AppComponent implements OnInit {
  selectedMovie: Movie;
  searchValue: string = '';
  movies: Movie[];

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = this.movieService.getMovies();
  }

  onSearchMovie(searchValue: string) {
    this.searchValue = searchValue;
  }

  onSelectMovie(selectedMovie: Movie) {
    this.selectedMovie = selectedMovie;
  }
}
