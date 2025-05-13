import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':sid')
  findOne(@Param('sid') sid: string) {
    return this.studentsService.findOne(sid);
  }
  @Put(':sid')
  update(@Param('sid') sid: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(sid, updateStudentDto);
  }

  @Delete(':sid')
  remove(@Param('sid') sid: string) {
    return this.studentsService.remove(sid);
  }
}
