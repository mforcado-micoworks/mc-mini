import { Module } from '@nestjs/common';
import { LineWebhookService } from './line-webhook.service';
import { LineWebhookController } from './line-webhook.controller';

@Module({
  controllers: [LineWebhookController],
  providers: [LineWebhookService],
})
export class LineWebhookModule {}
