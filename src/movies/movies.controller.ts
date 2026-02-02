import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies') // NOTE: entry point
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
    
    // router
    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    // prameter 가져오기
    @Get(':id')
    getOne(@Param('id') movieId: string): Movie{
        return this.moviesService.getOne(movieId);
    }
    
    @Post()
    create(@Body() movieData: any){ // body 가져오기
        return this.moviesService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId: string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: string){
        return `This will patch a movie with the id: ${movieId}`;
    }

}
