import { Suser } from "src/susers/entities/suser.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, ViewColumn } from "typeorm";


export enum TrackStatus{
    Created= 0,
    InProgress=1,
    Done =3
    

}

@Entity("local users")
export class Track extends BaseEntity{
    // @PrimaryGeneratedColumn('uuid')
    // _id!: string;

    // @Column({name:"Username"})
    // login!:string;

    // @Column("varchar",{name:"Name"})
    // name!:string;

    // @Column("text",{name:"Email"})
    // email!:string;   

    // @Column({name:"TotalRepository"})
    // repository!:number;

    // @Column()
    // public_repos!:number;

    // @Column({nullable:true})
    // public_gists:number;

    // @Column({nullable:false, default: TrackStatus.Created})
    // status!:TrackStatus;

    @PrimaryGeneratedColumn('uuid')
      _id:string

      @Column("varchar",{name:"Username"})
      name:string

      @Column("varchar",{name:"RollNo"})
      rollNo:string;

      @Column("varchar",{length:5, name:"semester"})
      semester:number;

      @Column("varchar",{length:10, name:"universityNo"})
      UniversityNo:string;

      @Column("varchar",{name:"email"})
      email:string;

      @Column("varchar",{name:"password"})
      password:string;

      @Column('simple-array', { nullable: true })
      images: string[];

    @OneToMany(()=> Suser,(suser)=>suser.track)
    suser:Suser[];
    
    @UpdateDateColumn({type: 'timestamp', default:() => 'CURRENT_TIMESTAMP(2)',select:false})
    updateTime:Date;
}   

