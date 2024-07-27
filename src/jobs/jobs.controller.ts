import { Controller, Post, Body, Param, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobOfferDto } from './dto/create-job.dto';


@Controller('jobs-offer')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}


  @Post(':id/create')
  createJobOffer( 
    @Param('id', ParseUUIDPipe) id: string,
    @Body() jobOfferDto: JobOfferDto,
  ) {
    return this.jobsService.createJobOffer(id, jobOfferDto);
  }
}
