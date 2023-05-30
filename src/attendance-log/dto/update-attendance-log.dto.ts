import { PartialType } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { CreateAttendanceLogDto } from './create-attendance-log.dto';

export class UpdateAttendanceLogDto extends PartialType(CreateAttendanceLogDto) {
   @PrimaryGeneratedColumn('uuid')
   _id:string;
   @Column("varchar",{name:"person"})
   // @Unique("unique_label_constraint", ["person"])
   person:string;
  
   @Column("varchar",{name:"status", default: "p" })
   Status:string;
   @UpdateDateColumn({type: 'timestamp'})
   updateTime:Date;
   @Column()
   created_at?: string;
}
