import { Column } from "typeorm";

export class CreateRegistrationDto {

   
   @Column("varchar",{name:"Username"})
   name:string

   @Column("varchar",{name:"RollNo"})
   rollNo:string;

   @Column("varchar",{length:5})
   semester:string;

   @Column("varchar",{length:10})
   UniversityNo:string;

   @Column("varchar")
   email:string;

   @Column("varchar")
   password:string;

   @Column('simple-array', { nullable: true })
   images: string[];
}
