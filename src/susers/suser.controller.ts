import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe, UseGuards } from '@nestjs/common';
import { SusersService } from './suser.service';
import { CreateSuserDto } from './dto/create-suser.dto';
import { UpdateSuserDto } from './dto/update-suser.dto';
import { Suser } from './entities/suser.entity';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ACGuard, UseRoles } from 'nest-access-control';


@Controller('suser')
@ApiTags("system users")
@ApiSecurity("JWT-auth")
export class SusersController {
  constructor(private readonly susersService: SusersService) {}
  // @ApiSecurity("JWT-auth")

  @UseGuards(AuthGuard("jwt"), ACGuard)
  @UseRoles({
    possession: 'any',
    action:'create',
    resource: 'posts'
  })
  @Post('/signup')
  public async create(@Body(ValidationPipe) createSuserDto: CreateSuserDto,trackid:string) {
    return this.susersService.create(createSuserDto,trackid);
  }
      
  @Get('/all')
  public async findAll() {
    return this.susersService.findAll();
  }
  @Get('/:email')
  async findOne(@Param("email") email:string){
    return this.susersService.findSuserByEmail(email)
  }
  @Get('/GET/:id')
  async findById(@Param("id") id: string){
    return this.susersService.findSuserById(id)
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateSuserDto: UpdateSuserDto) {
    return this.susersService.update(+id, updateSuserDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.susersService.remove(+id);
  }
}
