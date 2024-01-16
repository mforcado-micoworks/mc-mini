import { Module } from '@nestjs/common';
import { LineWebhookModule } from './resources/http/webhooks/line-webhook/line-webhook.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LineWebhookModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
})
export class AppModule {}
