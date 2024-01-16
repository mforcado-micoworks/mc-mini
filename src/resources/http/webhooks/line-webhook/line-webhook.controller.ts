import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineWebhookService } from './line-webhook.service';
import { CreateLineWebhookDto } from './dto/create-line-webhook.dto';
import { UpdateLineWebhookDto } from './dto/update-line-webhook.dto';

@Controller('line-webhook')
export class LineWebhookController {
  constructor(private readonly lineWebhookService: LineWebhookService) {}

  @Post()
  create(@Body() createLineWebhookDto: CreateLineWebhookDto) {
    return this.lineWebhookService.create(createLineWebhookDto);
  }

  @Get()
  findAll() {
    return this.lineWebhookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lineWebhookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLineWebhookDto: UpdateLineWebhookDto) {
    return this.lineWebhookService.update(+id, updateLineWebhookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lineWebhookService.remove(+id);
  }
}
