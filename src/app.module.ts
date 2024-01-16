import { Module } from '@nestjs/common';
import { LineWebhookModule } from './resources/http/webhooks/line-webhook/line-webhook.module';

@Module({
  imports: [LineWebhookModule],
})
export class AppModule {}
