import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsUUID,
  IsOptional,
  IsString,
  IsDateString,
  IsArray,
} from 'class-validator';

export class UnifiedAtsApplicationInput {
  @ApiPropertyOptional({
    type: Date,
    nullable: true,
    description: 'The application date',
  })
  @IsDateString()
  @IsOptional()
  applied_at?: string;

  @ApiPropertyOptional({
    type: Date,
    nullable: true,
    description: 'The rejection date',
  })
  @IsDateString()
  @IsOptional()
  rejected_at?: string;

  @ApiPropertyOptional({
    type: [String],
    nullable: true,
    description: 'The offers UUIDs for the application',
  })
  @IsArray()
  @IsOptional()
  offers?: string[];

  @ApiPropertyOptional({
    type: String,
    nullable: true,
    description: 'The source of the application',
  })
  @IsString()
  @IsOptional()
  source?: string;

  @ApiPropertyOptional({
    type: String,
    nullable: true,
    description: 'The UUID of the person credited for the application',
  })
  @IsUUID()
  @IsOptional()
  credited_to?: string;

  @ApiPropertyOptional({
    type: String,
    nullable: true,
    description: 'The UUID of the current stage of the application',
  })
  @IsUUID()
  @IsOptional()
  current_stage?: string;

  @ApiPropertyOptional({
    type: String,
    nullable: true,
    description: 'The rejection reason for the application',
  })
  @IsString()
  @IsOptional()
  reject_reason?: string;

  @ApiPropertyOptional({
    type: String,
    nullable: true,
    description: 'The UUID of the candidate',
  })
  @IsUUID()
  @IsOptional()
  candidate_id?: string;

  @ApiPropertyOptional({ type: String, description: 'The UUID of the job' })
  @IsUUID()
  @IsOptional()
  job_id?: string;

  @ApiPropertyOptional({
    type: Object,
    additionalProperties: true,
    nullable: true,
    description:
      'The custom field mappings of the object between the remote 3rd party & Panora',
  })
  @IsOptional()
  field_mappings?: Record<string, any>;
}

export class UnifiedAtsApplicationOutput extends UnifiedAtsApplicationInput {
  @ApiPropertyOptional({
    type: String,
    nullable: true,
    description: 'The UUID of the application',
  })
  @IsUUID()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional({
    type: String,
    nullable: true,
    description:
      'The remote ID of the application in the context of the 3rd Party',
  })
  @IsString()
  @IsOptional()
  remote_id?: string;

  @ApiPropertyOptional({
    type: Object,
    nullable: true,
    additionalProperties: true,
    description:
      'The remote data of the application in the context of the 3rd Party',
  })
  @IsOptional()
  remote_data?: Record<string, any>;

  @ApiPropertyOptional({
    type: Date,
    nullable: true,
    description: 'The created date of the object',
  })
  @IsOptional()
  created_at?: Date;

  @ApiPropertyOptional({
    type: Date,
    nullable: true,
    description: 'The modified date of the object',
  })
  @IsOptional()
  modified_at?: Date;

  @ApiPropertyOptional({
    type: Date,
    nullable: true,
    description: 'The remote created date of the object',
  })
  @IsOptional()
  remote_created_at?: string;

  @ApiPropertyOptional({
    type: Date,
    nullable: true,
    description: 'The remote modified date of the object',
  })
  @IsOptional()
  remote_modified_at?: string;
}
