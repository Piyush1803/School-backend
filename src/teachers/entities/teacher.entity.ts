import { Course } from "src/courses/entities/course.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn('uuid')
    tid:string;

    @Column()
    first_name:string;

    @Column()
    last_name:string;

    @Column()
    designation:string;

    @Column('float')
    salary:number;

    @Column()
    department:string;

    @OneToMany(()=> Course, course => course.teacher)
    courses:Course[];
}
