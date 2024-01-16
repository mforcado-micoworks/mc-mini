import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LineWebhookService } from './line-webhook.service';
import { LineWebhookController } from './line-webhook.controller';
import { VerifyLineSignatureMiddleware } from 'src/middlewares/verify-line-signature/verify-line-signature.middleware';

@Module({
  controllers: [LineWebhookController],
  providers: [LineWebhookService],
})
export class LineWebhookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyLineSignatureMiddleware)
      .forRoutes(LineWebhookController);
  }
}
