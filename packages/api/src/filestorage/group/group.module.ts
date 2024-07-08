import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { WebhookService } from '@@core/@core-services/webhooks/panora-webhooks/webhook.service';
import { ConnectionUtils } from '@@core/connections/@utils';
import { FieldMappingService } from '@@core/field-mapping/field-mapping.service';
import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { BoxService } from './services/box';
import { GroupService } from './services/group.service';
import { ServiceRegistry } from './services/registry.service';
import { SyncService } from './sync/sync.service';
import { IngestDataService } from '@@core/@core-services/unification/ingest-data.service';
import { PrismaService } from '@@core/@core-services/prisma/prisma.service';
import { CoreSyncRegistry } from '@@core/@core-services/registries/core-sync.registry';
import { BullQueueModule } from '@@core/@core-services/queues/queue.module';
import { MappersRegistry } from '@@core/@core-services/registries/mappers.registry';
import { UnificationRegistry } from '@@core/@core-services/registries/unification.registry';
import { CoreUnification } from '@@core/@core-services/unification/core-unification.service';
@Module({
  imports: [BullQueueModule],
  controllers: [GroupController],
  providers: [
    GroupService,
    LoggerService,
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
    CoreSyncRegistry,
    
    /* PROVIDERS SERVICES */
    BoxService,
  ],
  exports: [SyncService],
})
export class GroupModule {}
