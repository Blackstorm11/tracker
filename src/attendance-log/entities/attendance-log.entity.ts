import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { format } from 'date-fns';
import { FacultyM } from "src/faculty-m/entities/faculty-m.entity";
import { Options } from "prettier";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

@Entity("Attendance Log")
export class AttendanceLog {
 @PrimaryGeneratedColumn('uuid')
 _id:string;
 @Column("varchar",{name:"person"})

 person:string;

 @Column("varchar",{name:"status", default: "p" })
 Status:string;
@Column()
subject:string;

@Column()
created_at: string;

@Column({ type: 'timestamp' })
updateTime: Date;

@BeforeInsert()
@BeforeUpdate()
setUpdateTimestamp() {
  this.updateTime = new Date();
}

get formattedUpdateTime(): string {
  return format(this.updateTime, 'HH:mm:ss.SS');
}
@ManyToOne(() => FacultyM, (facultyM) => facultyM.attendanceLog)
@JoinColumn({name:'subject'})
facultyM: FacultyM[];

@Column()
facultyMId:string;

}
