import { Test } from "@nestjs/testing";
import { MoviesService } from "./movies.service";

describe('MoviesService', () => {
    let service: MoviesService;

    // beforeEach: 테스트 전에 실행
    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [MoviesService],
        }).compile();

        service = module.get<MoviesService>(MoviesService);
    });

    // it: individual test
    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getAll', () => {
        it('should return an array', () => {
            const result = service.getAll();
            expect(result).toBeInstanceOf(Array);
        });
    });

    describe('getOne', () => {
        it('should return a movie', () => {
            service.create({
                title: 'Test Movie',
                year: 2000,
                genres: ['test'],
            });
            const result = service.getOne(1);
            expect(result).toBeDefined();
        });
    });
});