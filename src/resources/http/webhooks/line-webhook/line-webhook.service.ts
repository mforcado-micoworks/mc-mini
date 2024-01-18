import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class LineWebhookService implements OnApplicationBootstrap {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async onApplicationBootstrap() {
    await this.kafkaClient.connect();
  }

  publish(payload: any) {
    this.kafkaClient.emit('tests', payload);
  }
}
