import { Controller, Get, Inject } from '@nestjs/common';
import { MailService } from './mail.service';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { MailerService } from '@nestjs-modules/mailer';
import type { SoftDeleteModel } from 'soft-delete-plugin-mongoose/dist/src/soft-delete-model';
import {
  Subscriber,
  SubscribersDocument,
} from 'src/subscribers/schemas/subscriber.schema';
import { Job, JobDocument } from 'src/jobs/schemas/job.schema';
import { InjectModel } from '@nestjs/mongoose';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    private mailerService: MailerService,

    @InjectModel(Subscriber.name)
    private subscriberModel: SoftDeleteModel<SubscribersDocument>,
    @InjectModel(Job.name)
    private jobModel: SoftDeleteModel<JobDocument>,
    //depency injection mailerService
  ) {}

  @Get()
  @Public()
  @ResponseMessage('Test email')
  async handleTestEmail() {
    const jobs = [
      {
        name: 'abc xyz',
        company: 'vuthaogiauvl',
        salary: '3000',
        template: 'job',
        skills: ['java', 'python', 'c++'],
      },
      {
        name: 'abc xyz 2',
        company: 'vuthaogiauvl2',
        salary: '3000',
        template: 'job',
        skills: ['java', 'python', 'c++'],
      },
    ];

    const subscribers = await this.subscriberModel.find({});
    for (const subs of subscribers) {
      const subsSkills = subs.skills;
      const jobWithMatchingSkills = await this.jobModel.find({
        skills: { $in: subsSkills },
      });
      //todo
      //build template
      if (jobWithMatchingSkills?.length > 0) {
        const jobs = jobWithMatchingSkills.map((item) => {
          return {
            name: item.name,
            company: item.company.name,
            salary:
              `${item.salary}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' đ',
            skills: item.skills,
          };
        });
        await this.mailerService.sendMail({
          to: 'vuvanthao1603@gmail.com',
          from: '"Support Team" <support@example.com>', // override default from
          subject: 'Welcome to Nice App! Confirm your Email',
          template: 'job',
          context: {
            receiver: subs.name,
            jobs: jobs,
          },
        });
      }
    }
  }
}
