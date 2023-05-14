
import { Track } from "src/track/entities/track.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("system users")
export class Suser {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({type:"varchar",length:50})
    firstname:string;

    @Column("varchar",{length:50})
    lastname:string;

    @Column("varchar",{length:50,unique:true})
    username:string;
    @Column()
    password:string;
    @Column("varchar")
    email:string;
   
    @UpdateDateColumn({type: 'timestamp', default:() => 'CURRENT_TIMESTAMP(2)',select:false})
    updateTime:Date;
    role: string;

    @ManyToOne(()=> Track,(track)=> track.suser)
    track : Track;

    
 
  
 
}
