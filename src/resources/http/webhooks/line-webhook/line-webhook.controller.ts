import { WebhookRequestBody } from '@line/bot-sdk';
import {
  Body,
  Controller,
  Headers,
  HttpCode,
  Post,
  Query,
} from '@nestjs/common';
import { LineWebhookService } from './line-webhook.service';

@Controller('webhooks/line')
export class LineWebhookController {
  constructor(private readonly lineWebhookService: LineWebhookService) {}

  @Post()
  @HttpCode(200)
  handleEvents(
    @Headers('x-line-signature') xLineSignature: string,
    @Body() body: WebhookRequestBody,
    @Query('siteUuid') siteUuid: string,
  ) {
    this.lineWebhookService.publish({
      xLineSignature,
      body,
      siteUuid,
      from: 'line webhook',
    });
  }
}
