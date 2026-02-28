import { Module } from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { ResumesController } from './resumes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Resume, ResumeSchema } from './schema/resume.schema';
import { Job, JobSchema } from 'src/jobs/schemas/job.schema';
import { Company, CompanySchema } from 'src/companies/schemas/company.schema';

@Module({
  controllers: [ResumesController],
  providers: [ResumesService],
  imports: [
    MongooseModule.forFeature([
      { name: Resume.name, schema: ResumeSchema },
      { name: Job.name, schema: JobSchema },
      { name: Company.name, schema: CompanySchema },
    ]),
  ],
})
export class ResumesModule {}
