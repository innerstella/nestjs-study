import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// NOTE: app module에는 app controller와 app provider만 있어야 함
// decorator : 클래스 위의 함수
@Module({
  imports: [MoviesModule],
  controllers: [AppController], 
  providers: [], 
})
export class AppModule {} // App module은 루트 모듈