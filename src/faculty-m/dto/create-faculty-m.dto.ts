import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateFacultyMDto {
   @PrimaryGeneratedColumn('uuid')
   id:string;

   @Column({type:"varchar"})
   Username:string
   
   @Column({type:"varchar"})
   email:string;

   @Column()
   password:string;

   @Column()
   subject:string;
}
