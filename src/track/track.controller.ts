import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('track')
@ApiTags('user')

export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Post('/add_user')
  public async create(@Body() createTrackRequeat: CreateTrackDto) {
    const resp= await this.trackService.create(createTrackRequeat)
  }
 
  @Get('/all')
  public async findAll() {
    const resp= await this.trackService.findAll();
    return resp;
  }
  @Get('/:email')
  async findOne(@Param("email") email:string){
    return this.trackService.findTrackByEmail(email)
  }

  @ApiSecurity("JWT-auth")
  @Get('/:id')
  public async find(@Param('id') trackid: string) {
    const resp = await this.trackService.getOne(trackid);
    return resp;
  }
  // @ApiSecurity("JWT-auth")
  // @Get()
  // async findOneOrFail(@Param('id') id:string){
  //   return this.trackService.findTrackById(id)
  // }
 
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTrackDto: UpdateTrackDto) {
  //   return this.trackService.update(+id, updateTrackDto);
  // }
  // @ApiSecurity("JWT-auth")
  // @Put('/update/:id')
  // public async updateOne(@Param('id')trackid :string ,@Body() updateTrackRequest:UpdateTrackDto){
  //     const resp=await this.trackService.updateOne(trackid,updateTrackRequest);
  //     return resp;
  // }
  @ApiSecurity("JWT-auth")
  @Delete('/delete/:id')
  public async remove(@Param('id') trackid: string) {
    const resp = await this.trackService.removebyid(trackid);
    return resp;
  }
}
