import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { CreateAssociationDto } from './dto/create-association.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ValidRoles } from 'src/auth/interfaces';

@Controller('associations')
export class AssociationsController {
  constructor(private readonly associationsService: AssociationsService) {}


  @Post(':id/create')
  createAssociations(
    @Body() createAssociationsDto: CreateAssociationDto,
    @Param('id') id: string,
  ) {
    const association = this.associationsService.createAssociation(
      createAssociationsDto,
      id,
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
