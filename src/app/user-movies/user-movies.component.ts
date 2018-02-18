import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-user-movies',
  templateUrl: './user-movies.component.html',
  styleUrls: ['./user-movies.component.css']
})
export class UserMoviesComponent implements OnInit {
  title:string = 'My collection';
  movies: any[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getUserMovies();
  }
  removeMovie(movie){
    this.movieService.removeMovie(movie);
    console.log(movie)
  }
 


}
