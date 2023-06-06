import { UserRoles } from "src/auth/user.roles";
import { AttendanceLog } from "src/attendance-log/entities/attendance-log.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Unique(['subject'])
@Entity("Faculty Members")
export class FacultyM {
   @PrimaryGeneratedColumn('uuid')
   _id:string;

   @Column({type:"varchar"})
   Username:string
   
   @Column({type:"varchar"})
   email:string;

   @Column()
   password:string;

   @Column()
   subject:string;
   @Column({type:'enum', enum:UserRoles, default:UserRoles.RW})
   roles:UserRoles

   @OneToMany(() => AttendanceLog, (attendanceLog) => attendanceLog.facultyM)
   attendanceLog: AttendanceLog[];
   
}
