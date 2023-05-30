import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { format } from 'date-fns';

@Entity("Attendance Log")
export class AttendanceLog {
 @PrimaryGeneratedColumn('uuid')
 _id:string;
 @Column("varchar",{name:"person"})

 person:string;

 @Column("varchar",{name:"status", default: "p" })
 Status:string;


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


}
