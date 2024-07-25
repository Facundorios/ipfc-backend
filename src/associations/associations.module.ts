import { Module } from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { AssociationsController } from './associations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './entities/association.entity';
import { Company } from 'src/company/entities/company.entity';

@Module({
  controllers: [AssociationsController],
  providers: [AssociationsService],
  imports: [TypeOrmModule.forFeature([Association, Company])]
})
export class AssociationsModule {}
