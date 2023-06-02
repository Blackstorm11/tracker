import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Track } from './entities/track.entity';
import { AuthGuard } from '@nestjs/passport';
import { ACGuard, UseRoles } from 'nest-access-control';

@Controller('track')
@ApiTags('user')

export class TrackController {
  constructor(private readonly trackService: TrackService) {}
  @ApiSecurity("JWT-auth")
 
  @Post('/add_user')
  public async create(@Body() createTrackRequeat: CreateTrackDto) {
    const resp= await this.trackService.create(createTrackRequeat)
  }
  @ApiSecurity("JWT-auth")
  @Get(':username/images')
  public async getUserImages(@Param('username') username: string) {
    // Retrieve the user's images from the trackService or database
    const userImages = await this.trackService.getUserImages(username);

    // Create an array of objects containing the image and its corresponding label
    const response = userImages.map((image, index) => ({
      label: `${username}_${index + 1}.png`,
      image,
    }));

    return response;
  }
  @ApiSecurity("JWT-auth")
  @Get('rollNo')
  async getAllRollNo(): Promise<string[]> {
    const rollNo = await this.trackService.findAllRollNo();
    return rollNo;
  }

  @ApiSecurity("JWT-auth")
 
  @Get('/all')
  public async findAll() {
    const resp= await this.trackService.findAll();
    return resp;
  }
  // @ApiSecurity("JWT-auth")
  // @Get('/all/names')
  // public async findnames(){
  //   const resp=await this.trackService.findAllNames();
  //   return resp;
  // }

  @ApiSecurity("JWT-auth")
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
 @Put('email/update-password/:email')
  public async updatePassword(
    @Param('email') email: string,
    @Body('newPassword') newPassword: string
  ): Promise<Track> {
    return this.trackService.updateOne(email, newPassword);
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
