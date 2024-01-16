import { Injectable } from '@nestjs/common';
import { CreateLineWebhookDto } from './dto/create-line-webhook.dto';
import { UpdateLineWebhookDto } from './dto/update-line-webhook.dto';

@Injectable()
export class LineWebhookService {
  create(createLineWebhookDto: CreateLineWebhookDto) {
    return 'This action adds a new lineWebhook';
  }

  findAll() {
    return `This action returns all lineWebhook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lineWebhook`;
  }

  update(id: number, updateLineWebhookDto: UpdateLineWebhookDto) {
    return `This action updates a #${id} lineWebhook`;
  }

  remove(id: number) {
    return `This action removes a #${id} lineWebhook`;
  }
}
