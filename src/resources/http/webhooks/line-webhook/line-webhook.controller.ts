import { WebhookRequestBody } from '@line/bot-sdk';
import {
  Body,
  Controller,
  Headers,
  HttpCode,
  Post,
  Query,
} from '@nestjs/common';

@Controller('webhooks/line')
export class LineWebhookController {
  @Post()
  @HttpCode(200)
  handleEvents(
    @Headers('x-line-signature') xLineSignature: string,
    @Body() body: WebhookRequestBody,
    @Query('siteUuid') siteUuid: string,
  ) {
    console.log(xLineSignature);
    console.log(body);
    console.log(siteUuid);
  }
}
