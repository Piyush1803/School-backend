import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { In, Repository } from 'typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepo: Repository<Course>,

    @InjectRepository(Student)
    private studentRepo: Repository<Student>,

    @InjectRepository(Teacher)
    private teacherRepo: Repository<Teacher>,
  ){}

  async create(data_create: CreateCourseDto) {
    const teacher = await this.teacherRepo.findOneBy({tid: data_create.teacherId});

    const students = data_create.studentIds
    ? await this.studentRepo.findBy({sid: In(data_create.studentIds)})
    : [];

    const course = this.courseRepo.create({
      title:data_create.title,
      semester:data_create.semester,
      units:data_create.units,
      teacher:teacher ?? undefined,
      students:students,
    });
    return this.courseRepo.save(course);
  }

  findAll() {
    return this.courseRepo.find();
  }

  findOne(cid: string) {
    return this.courseRepo.findOneBy({cid});
  }

  update(cid: string, data_update: UpdateCourseDto) {
    return this.courseRepo.update(cid,data_update);
  }

  remove(cid: string) {
    return this.courseRepo.delete(cid);
  }
}
