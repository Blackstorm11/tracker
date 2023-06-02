import { AttendanceLog } from "src/attendance-log/entities/attendance-log.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Faculty Members")
export class FacultyM {
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

   @OneToMany(() => AttendanceLog, (attendanceLog) => attendanceLog.facultyM)
   attendanceLog: AttendanceLog[];
   
}
