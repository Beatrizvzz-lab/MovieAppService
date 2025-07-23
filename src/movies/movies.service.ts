import { Injectable, NotFoundException } from '@nestjs/common';
import moviesJson from '../data/movies.json';
import movieDetailsJson from '../data/movie-details.json';
import { Movie } from './interface/movie.interface';
import { MovieDetail } from './interface/movie-detail.interface';

@Injectable()
export class MoviesService {
  private moviesList: Movie[] = moviesJson as Movie[];
  private movieDetailsList: MovieDetail[] = movieDetailsJson as MovieDetail[];

  findAll(): Movie[] {
    return this.moviesList;
  }

  findOne(imdbID: string): Movie {
    const movie = this.moviesList.find((m) => m.imdbID === imdbID);
    if (!movie) {
      throw new NotFoundException(`Movie with imdbID ${imdbID} not found`);
    }
    return movie;
  }

  findDetail(imdbID: string): MovieDetail {
    const detail = this.movieDetailsList.find((m) => m.imdbID === imdbID);
    if (!detail) {
      throw new NotFoundException(`Details for movie ${imdbID} not found`);
    }
    return detail;
  }
}
