import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';
import { runInThisContext } from 'vm';

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

  findOne(id: string) {
    return this.teacherRepo.findOneBy({id});
  }

  update(id: string, data_update: UpdateTeacherDto) {
    return this.teacherRepo.update(id,data_update);
  }

  remove(id: string) {
    return this.teacherRepo.delete(id);
  }
}
