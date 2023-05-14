// import { Injectable, UnauthorizedException } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import { Strategy } from "passport-local";
// import { Suser } from "src/susers/entities/suser.entity";
// import { SusersService } from "src/susers/suser.service";



// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy){
    
//     constructor (private suserService:SusersService){
//         super({
//             usernameField: "email",
//             passwordField: "password"
//         })
//     }
//     async validate(email:string, password:string):Promise<Suser>{
//         const suser: Suser = await this.suserService.findSuserByEmail(email);
//         if (suser && suser.password== password) return suser;
//         // if(suser){
//         //     const matched= comparePassword({ rawPassword: password, hash: suser.password });
//         //     if(matched){
//         //         console.log('user found');
//         //     }else{
//         //         console.log("error")
//         //         return null
//         //     }
//         // }
//         if (suser == undefined) throw new UnauthorizedException("User not Found :" +email);
//         if (suser.password != password) throw new UnauthorizedException('Inavlid Password');
        
//     }

// }





import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Suser } from "src/susers/entities/suser.entity";
import { Track } from "src/track/entities/track.entity";
import { SusersService } from "src/susers/suser.service";
import { TrackService } from "src/track/track.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    
    constructor (
        private suserService:SusersService,
        private userService: TrackService
    ){
        super({
            usernameField: "email",
            passwordField: "password"
        })
    }

    async validate(email:string, password:string):Promise<Suser | Track>{
        const suser: Suser = await this.suserService.findSuserByEmail(email);
        if (suser && suser.password== password) return suser;

        const track: Track = await this.userService.findTrackByEmail(email);
        if (track && track.password== password) return track;

        throw new UnauthorizedException('Invalid email or password');
    }

}