import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service';
import { MovieModel} from '../movieModel';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  constructor(
    private movieService: MovieService) { }
    
  movies: any[];

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
  addMovie(movie){
    this.movieService.addMovie(movie);
    console.log(movie)
  }
}