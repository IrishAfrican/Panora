import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { WebhookService } from '@@core/@core-services/webhooks/panora-webhooks/webhook.service';
import { ConnectionUtils } from '@@core/connections/@utils';
import { CoreModule } from '@@core/core.module';
import { FieldMappingService } from '@@core/field-mapping/field-mapping.service';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ServiceRegistry } from './services/registry.service';
import { UserService } from './services/user.service';
import { SyncService } from './sync/sync.service';
import { UserController } from './user.controller';
import { IngestDataService } from '@@core/@core-services/unification/ingest-data.service';
import { BullQueueModule } from '@@core/@core-services/queues/queue.module';
import { PrismaService } from '@@core/@core-services/prisma/prisma.service';
import { CoreSyncRegistry } from '@@core/@core-services/registries/core-sync.registry';
import { MappersRegistry } from '@@core/@core-services/registries/mappers.registry';
import { UnificationRegistry } from '@@core/@core-services/registries/unification.registry';
import { CoreUnification } from '@@core/@core-services/unification/core-unification.service';

@Module({
  imports: [BullQueueModule],
  controllers: [UserController],
  providers: [
    UserService,
    LoggerService,
    CoreSyncRegistry,
    
    SyncService,
    CoreUnification,
    UnificationRegistry,
    MappersRegistry,
    WebhookService,
    EncryptionService,
    FieldMappingService,
    ServiceRegistry,
    ConnectionUtils,
    IngestDataService,
    /* PROVIDERS SERVICES */
  ],
  exports: [SyncService],
})
export class UserModule {}
