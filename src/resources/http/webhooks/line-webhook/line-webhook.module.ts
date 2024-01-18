import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LineWebhookService } from './line-webhook.service';
import { LineWebhookController } from './line-webhook.controller';
import { VerifyLineSignatureMiddleware } from 'src/middlewares/verify-line-signature/verify-line-signature.middleware';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['kafka:9092'],
          },
        },
      },
    ]),
  ],
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
