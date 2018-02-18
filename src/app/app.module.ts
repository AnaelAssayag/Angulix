import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MovieService } from './movie.service';





import { AppComponent } from './app.component';
import { UserMoviesComponent } from './user-movies/user-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
// import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    UserMoviesComponent,
    AllMoviesComponent,
    // MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule

  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
