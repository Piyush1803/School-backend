import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepo: Repository<Teacher>,
  ){}
  create(data_create: CreateTeacherDto) {
    const teacher = this.teacherRepo.create(data_create)
    return this.teacherRepo.save(teacher);
  }

  findAll() {
    return this.teacherRepo.find();
  }

  findOne(tid: string) {
    return this.teacherRepo.findOneBy({tid});
  }

  update(tid: string, data_update: UpdateTeacherDto) {
    return this.teacherRepo.update(tid,data_update);
  }

  remove(tid: string) {
    return this.teacherRepo.delete(tid);
  }
}
