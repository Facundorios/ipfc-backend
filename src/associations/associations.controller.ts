import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { CreateAssociationDto } from './dto/create-association.dto';
import { GetUser } from 'src/auth/guards';
import { User } from 'src/auth/entities';

@Controller('associations')
export class AssociationsController {
  constructor(private readonly associationsService: AssociationsService) {}

  
  @Post(':id/create')
  createAssociations(
    @Body() createAssociationsDto: CreateAssociationDto,
    @Param('id') id: string,
    @GetUser() userid: string
  ) {
    const association = this.associationsService.createAssociation(
      createAssociationsDto,
      id,
      userid
    );

    return association;
  }

  @Patch('update-status/:id/:status')
  updateAssociationStatus(
    @Param('id') id: string,
    @Param('status') status: string,
  ) {
    return this.associationsService.setAssociationsStatus(id, status);
  }
}
