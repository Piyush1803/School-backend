
import { Course } from "src/courses/entities/course.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn('uuid')
    sid:string;

    @Column()
    first_name:string;

    @Column()
    last_name:string;

    @Column()
    phone:string;

    @Column()
    address:string;

    @ManyToMany(() => Course, course => course.students)
    @JoinTable({
        name: 'student_courses',
        joinColumn: {name:'sid',referencedColumnName:'sid'},
        inverseJoinColumn: {name:'cid',referencedColumnName:'cid'}
    })
    courses:Course[];
}
