import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'piyushdhanwal_18',
      password: 'Piyush_18',
      database: 'school',
      autoLoadEntities: true,
      synchronize: true,
      logging:true
    }),
    StudentsModule,
    CoursesModule,
    TeachersModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationBootstrap{
  onApplicationBootstrap() {
    console.log('✅ PostgreSQL connected successfully!');
  }
}
