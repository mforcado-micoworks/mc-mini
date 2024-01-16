import { PartialType } from '@nestjs/mapped-types';
import { CreateLineWebhookDto } from './create-line-webhook.dto';

export class UpdateLineWebhookDto extends PartialType(CreateLineWebhookDto) {}
