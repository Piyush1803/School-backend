import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':cid')
  findOne(@Param('cid') cid: string) {
    return this.coursesService.findOne(cid);
  }

  @Patch(':cid')
  update(@Param('cid') cid: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(cid, updateCourseDto);
  }

  @Delete(':cid')
  remove(@Param('cid') cid: string) {
    return this.coursesService.remove(cid);
  }
}
