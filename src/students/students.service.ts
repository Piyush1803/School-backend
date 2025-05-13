import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  
  constructor(
    @InjectRepository(Student)
    private studentRepo : Repository<Student>,
  ){}
  create(data_create: CreateStudentDto) {
    const student = this.studentRepo.create(data_create);
    return this.studentRepo.save(student);
  }

  findAll() {
    return this.studentRepo.find();
  }

  findOne(sid: string) {
    return this.studentRepo.findOneBy({sid});
  }

  update(sid: string, data_update: UpdateStudentDto) {
    return this.studentRepo.update(sid,data_update);
  }

  remove(sid: string) {
    return this.studentRepo.delete(sid);
  }
}
