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

    it('should be 4', () =>{
        expect(2+2).toEqual(4);
    })
});