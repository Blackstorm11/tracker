import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';
import { SusersService } from 'src/susers/suser.service';
import { Repository } from 'typeorm';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackDto } from './dto/track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track, TrackStatus } from './entities/track.entity';

@Injectable()
export class TrackService {
  
  constructor(@InjectRepository(Track) private trackRepository: Repository<Track>){}

  public async create(createTrackRequeat: CreateTrackDto) {
    let track: Track = new Track()
    // track.login=createTrackRequeat.login;
    track.name=createTrackRequeat.name;
    track.email=createTrackRequeat.email;
    // track.repository=createTrackRequeat.repository;
    // track.public_repos=createTrackRequeat.public_repos;
    // track.public_gists=createTrackRequeat.public_gists;
    // track.status=TrackStatus.Created;
    track.rollNo=createTrackRequeat.rollNo;
    track.UniversityNo=createTrackRequeat.UniversityNo;
    track.password=createTrackRequeat.password;
    track.semester=createTrackRequeat.semester;
    track.images=createTrackRequeat.images;
   
    await this.trackRepository.save(track);

    const trackDTO= new TrackDto();
    trackDTO._id= track._id;
    // trackDTO.login= track.login;
    trackDTO.name=track.name;
    trackDTO.email= track.email;
    trackDTO.UniversityNo=track.UniversityNo;
    trackDTO.images=track.images;
    trackDTO.password=track.password;
    trackDTO.semester=track.semester;
    // trackDTO.repository= track.repository;
    trackDTO.rollNo=track.rollNo
    // trackDTO.public_repos=track.public_repos;
    // trackDTO.public_gists=track.public_gists;
    // trackDTO.status= track.status;
    return trackDTO;
  }

  public async findAll() {
    const track: Track[] = await this.trackRepository.find();

    const trackDTO:TrackDto[] = track.map(x => this.entityToDto(x));
    return trackDTO;

  }

  findTrackById(id:string):Promise<Track>{
    return this.trackRepository.findOneOrFail({where: {_id :id}})
  }
  findTrackByEmail(email:string){
    return this.trackRepository.findOne({where:{email:email}});
  }

  public async getOne(trackid: string) {
    const track:Track =await this.trackRepository.findOneBy({_id: trackid});

    if (!track) throw new NotFoundException('User with the id ${trackid} was not found');
    const trackDTO:TrackDto= this.entityToDto(track)
    return track;
  }
  private entityToDto(track: Track): TrackDto {
      const trackDto= new TrackDto();
      trackDto._id=track._id;
      // trackDto.login= track.login;
      trackDto.name=track.name;
      trackDto.email=track.email;
      // trackDto.repository= track.repository;
      // trackDto.public_repos= track.public_repos;
      // trackDto.public_gists=track.public_gists;
      // trackDto.status= track.status;
      trackDto.rollNo=track.rollNo;
      trackDto.UniversityNo=track.UniversityNo;
      trackDto.images=track.images;
      trackDto.password=track.password;
      trackDto.semester=track.semester;

      return trackDto;

  }
 

  // public async updateOne(trackid: string, updateTrackRequest: UpdateTrackDto) {
  //   const track: Track= await this.getOne(trackid);

  //   //if(UpdateTrackRequest.login)track.login=UpdateTrackRequest.login;
  //   track.login=updateTrackRequest.login ? updateTrackRequest.login : track.login;

  //   track.name=updateTrackRequest.name || track.name;

  //   //if(UpdateTrackRequest.email)track.email=UpdateTrackRequest.email;
  //   track.email=updateTrackRequest.email ? updateTrackRequest.email: track.email;

  //   //if(UpdateTrackRequest.repository)track.repository=UpdateTrackRequest.repository;
  //   track.repository=updateTrackRequest.repository ? updateTrackRequest.repository :track.repository;
    
  //   //if(UpdateTrackRequest.status)track.status=UpdateTrackRequest.repository;
  //   //track.status= UpdateTrackRequest.status ? UpdateTrackRequest.status;
  //   track.status= updateTrackRequest.status || track.status;

  //   await this.trackRepository.save(track);

  //   const trackDTO:TrackDto=this.entityToDto(track)
  //   return track;
  // }

  public async removebyid(trackid: string) {
    const track:Track =await this.trackRepository.findOneBy({_id: trackid})
    return track;
  }
}
