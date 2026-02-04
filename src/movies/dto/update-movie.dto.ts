import { IsNumber, IsString } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";
import { PartialType } from "@nestjs/mapped-types";

// export class UpdateMovieDto {
//  @IsString()
//  readonly title?: string;

//  @IsNumber()
//  readonly year?: number;

//  @IsString({each: true})
//  readonly genres?: string[];
// }

// PartialType(BaseType) : BaseType의 모든 속성을 선택적으로 만듦
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}