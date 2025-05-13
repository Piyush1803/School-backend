import { Student } from "src/students/entities/student.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn('uuid')
    cid:string;

    @Column()
    title:string;

    @Column()
    semester:number;

    @Column()
    units:number;

    @ManyToOne(() => Teacher, teacher => teacher.courses, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'tid' })
    teacher: Teacher;

    @ManyToMany(() => Student, student => student.courses)
    students:Student[];

}


