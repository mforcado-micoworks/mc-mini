import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class TestService implements OnApplicationBootstrap {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async onApplicationBootstrap() {
    await this.kafkaClient.connect();
  }

  publish() {
    this.kafkaClient.emit('test', { test: 'test', foo: 'from line' });
  }
}
