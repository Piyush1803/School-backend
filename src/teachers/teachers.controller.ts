import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Get()
  findAll() {
    return this.teachersService.findAll();
  }

  @Get(':tid')
  findOne(@Param('tid') tid: string) {
    return this.teachersService.findOne(tid);
  }

  @Patch(':tid')
  update(@Param('tid') tid: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teachersService.update(tid, updateTeacherDto);
  }

  @Delete(':tid')
  remove(@Param('tid') tid: string) {
    return this.teachersService.remove(tid);
  }
}
