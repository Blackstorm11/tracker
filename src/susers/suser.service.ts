import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encode } from 'punycode';
import { Track } from 'src/track/entities/track.entity';
import { TrackService } from 'src/track/track.service';

import { Constants } from 'src/utils/constants';

import { Repository } from 'typeorm';
import { string } from 'yargs';
import { CreateSuserDto } from './dto/create-suser.dto';
import { SuserDTO } from './dto/suser.dto';
import { UpdateSuserDto } from './dto/update-suser.dto';
import { Suser } from './entities/suser.entity';

@Injectable()
export class SusersService {
  
  constructor(@InjectRepository(Suser) private suserRepository: Repository<Suser> ,private trackService: TrackService){}


  public async create(createSuserDto: CreateSuserDto , track_id: string) {
    let suser:Suser= new Suser();
    
    suser.firstname=createSuserDto.firstname;
    suser.lastname=createSuserDto.lastname;
    suser.username=createSuserDto.username;
    suser.email=createSuserDto.email;
   
    suser.password=createSuserDto.password;
    
    
    await this.suserRepository.save(suser)

    const suserDTO= new SuserDTO();
    suserDTO._id=suser._id;
    suserDTO.email= suser.email;
    suserDTO.firstname= suser.firstname;
    suserDTO.lastname= suser.lastname;
    suserDTO.password= suser.password;
    suserDTO.username=suser.username;

    return suserDTO;
  }

  findAll() {
    return this.suserRepository.find();
  }

 


  findSuserByEmail(email:string){
    return this.suserRepository.findOne({where: {email: email}});
  }
  
  findSuserById(id:string){
    return this.suserRepository.findOne({where: {_id :id}})
  }

  update(id: number, updateSuserDto: UpdateSuserDto) {
    return `This action updates a #${id} suser`;
  }

  remove(id: number) {
    return `This action removes a #${id} suser`;
  }
}

