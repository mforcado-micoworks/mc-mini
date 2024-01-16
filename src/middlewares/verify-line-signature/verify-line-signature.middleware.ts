import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { VerifyXlineSignature } from 'src/utils/verify-xline-signature/verify-xline-signature';

@Injectable()
export class VerifyLineSignatureMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const xLineSignature = req.headers['x-line-signature'];
    const body = req.body;

    if (!VerifyXlineSignature.verify(xLineSignature, body)) {
      throw new BadRequestException();
    }

    next();
  }
}
