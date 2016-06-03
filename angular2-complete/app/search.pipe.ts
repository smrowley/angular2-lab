import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core';
import {Movie} from './model/movie';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {
  transform(movies: Movie[], searchValue: string) {
    return movies.filter(movie => movie.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
  }
}
