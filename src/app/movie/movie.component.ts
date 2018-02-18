import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieModel} from '../movieModel';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieModel = new MovieModel();
  @Input() btnRemove: Boolean;
  @Output() movieRemoved : EventEmitter<MovieModel> = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }
  removeThisMovie(){ 
    this.movieRemoved.emit(this.movie);   
  }

}
