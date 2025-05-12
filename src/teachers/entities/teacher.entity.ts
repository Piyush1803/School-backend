import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn('uuid')
    id:string;

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
}
