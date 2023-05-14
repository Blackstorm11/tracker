import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
@Entity("Attendance Log")
export class AttendanceLog {
 @PrimaryGeneratedColumn('uuid')
 _id:string;
 @Column("varchar",{name:"person"})

 person:string;

 @Column("varchar",{name:"status", default: "p" })
 Status:string;
 @UpdateDateColumn({type: 'timestamp', default:() => 'CURRENT_TIMESTAMP(2)',select:false})
 updateTime:Date;
 @CreateDateColumn({ type: 'timestamp' })
 created_at: Date;
}
