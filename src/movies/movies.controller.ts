import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies') // NOTE: entry point
export class MoviesController {
    // router
    @Get()
    getAll(){
        return 'This will return all movies';
    }

    // search 부분이 get보다 밑에 있으면 NestJS는 search를 id로 판단함
    @Get("search")
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie title made after ${searchingYear}.`;
    }

    // prameter 가져오기
    @Get(':id')
    getOne(@Param('id') movieId: string){
        return `This will return one movie with the id: ${movieId}`;
    }
    
    @Post()
    create(@Body() movieData: any){ // body 가져오기
        console.log(movieData);
        return movieData;
    }

    @Delete(':id')
    remove(@Param('id') movieId: string){
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch(':id')
    patch(@Param('id') movieId: string){
        return `This will patch a movie with the id: ${movieId}`;
    }

}
