import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// decorator : 클래스 위의 함수
@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져오고 함수를 실행함 (express의 router와 같은 역할)
  providers: [MoviesService], 
})
export class AppModule {} // App module은 루트 모듈