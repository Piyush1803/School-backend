import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepo: Repository<Course>,
  ){}
  create(data_create: CreateCourseDto) {
    const course = this.courseRepo.create(data_create);
    return this.courseRepo.save(course);
  }

  findAll() {
    return this.courseRepo.find();
  }

  findOne(id: string) {
    return this.courseRepo.findOneBy({id});
  }

  update(id: string, data_update: UpdateCourseDto) {
    return this.courseRepo.update(id,data_update);
  }

  remove(id: string) {
    return this.courseRepo.delete(id);
  }
}
