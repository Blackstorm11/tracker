import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateGitHistoryDto {

  @ApiProperty()
    @IsNumber()
  violations: number;

  @ApiProperty()
  @IsString()
  public_gist: string;

  @ApiProperty()
  @IsNumber()
  public_repo: number;
}