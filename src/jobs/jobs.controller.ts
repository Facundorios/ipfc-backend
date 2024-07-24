import { Controller, Post, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobOfferDto } from './dto/create-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post(':id/create-job-offer')
  createJobOffer(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() jobOfferDto: JobOfferDto,
  ) {
    return this.jobsService.createJobOffer(id, jobOfferDto);
  }
}
