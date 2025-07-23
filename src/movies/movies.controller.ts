import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @ApiOperation({ summary: 'List all movies' })
  @ApiResponse({
    status: 200,
    description: 'List of movies returned successfully',
  })
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a movie by imdbID' })
  @ApiResponse({ status: 200, description: 'Movie found' })
  @ApiResponse({ status: 404, description: 'Movie not found' })
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }
  @Get(':id/detail')
  @ApiOperation({ summary: 'Get movie details by imdbID' })
  @ApiResponse({ status: 200, description: 'Detailed movie info' })
  @ApiResponse({ status: 404, description: 'Details not found' })
  getDetails(@Param('id') id: string) {
    return this.moviesService.findDetail(id);
  }
}
