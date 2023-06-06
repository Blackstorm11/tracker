import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

export class AttendanceDTO{
   @ApiProperty()
   @PrimaryGeneratedColumn('uuid')
   _id:string;
   @ApiProperty()
   @Column("varchar",{name:"person"})
   // @Unique("unique_label_constraint", ["person"])
   person:string;
  
   @ApiProperty()
   @Column("varchar",{name:"status", default: "p" })
   Status:string;
   @ApiProperty()
   @UpdateDateColumn({ type: 'timestamp' })
updateTime: Date;
@ApiProperty()
@Column()
created_at: string;

@Column()
subject:string;

// @Column()
// facultyMId:string;
}