import { Test, TestingModule } from '@nestjs/testing';
import { LineWebhookController } from './line-webhook.controller';
import { LineWebhookService } from './line-webhook.service';

describe('LineWebhookController', () => {
  let controller: LineWebhookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LineWebhookController],
      providers: [LineWebhookService],
    }).compile();

    controller = module.get<LineWebhookController>(LineWebhookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
