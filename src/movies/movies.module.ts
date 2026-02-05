import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    controllers: [MoviesController], // url을 가져오고 함수를 실행함 (express의 router와 같은 역할)
    providers: [MoviesService],
})

export class MoviesModule {}