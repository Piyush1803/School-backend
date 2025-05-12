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

  findOne(id: string) {
    return this.studentRepo.findOneBy({id});
  }

  update(id: string, data_update: UpdateStudentDto) {
    return this.studentRepo.update(id,data_update);
  }

  remove(id: string) {
    return this.studentRepo.delete(id);
  }
}
