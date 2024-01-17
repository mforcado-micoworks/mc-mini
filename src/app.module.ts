import { Module } from '@nestjs/common';
import { LineWebhookModule } from './resources/http/webhooks/line-webhook/line-webhook.module';
import { ConfigModule } from '@nestjs/config';
import { TestModule } from './resources/http/api/test/test.module';

@Module({
  imports: [
    LineWebhookModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TestModule,
  ],
})
export class AppModule {}
