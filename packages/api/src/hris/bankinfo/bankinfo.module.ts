import { Module } from '@nestjs/common';
import { BankinfoController } from './bankinfo.controller';
import { SyncService } from './sync/sync.service';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { BankInfoService } from './services/bankinfo.service';
import { ServiceRegistry } from './services/registry.service';
import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';
import { FieldMappingService } from '@@core/field-mapping/field-mapping.service';
import { PrismaService } from '@@core/@core-services/prisma/prisma.service';
import { WebhookService } from '@@core/@core-services/webhooks/panora-webhooks/webhook.service';
import { BullModule } from '@nestjs/bull';
import { ConnectionUtils } from '@@core/connections/@utils';
import { ApiKeyAuthGuard } from '@@core/auth/guards/api-key.guard';
import { IngestDataService } from '@@core/@core-services/unification/ingest-data.service';
import { BullQueueModule } from '@@core/@core-services/queues/queue.module';
import { CoreSyncRegistry } from '@@core/@core-services/registries/core-sync.registry';
import { MappersRegistry } from '@@core/@core-services/registries/mappers.registry';
import { UnificationRegistry } from '@@core/@core-services/registries/unification.registry';
import { CoreUnification } from '@@core/@core-services/unification/core-unification.service';

@Module({
  imports: [BullQueueModule],
  controllers: [BankinfoController],
  providers: [
    BankInfoService,
    LoggerService,
    SyncService,
    WebhookService,
    EncryptionService,
    FieldMappingService,
    CoreSyncRegistry,
    
    ServiceRegistry,
    ConnectionUtils,
    IngestDataService,
    CoreUnification,
    UnificationRegistry,
    MappersRegistry,
    /* PROVIDERS SERVICES */
  ],
  exports: [SyncService],
})
export class BankInfoModule {}
