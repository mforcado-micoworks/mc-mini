import { createHmac } from 'node:crypto';

export class VerifyXlineSignature {
  static verify(xLineSignature, body) {
    const signature = createHmac('SHA256', process.env.CHANNEL_SECRET)
      .update(JSON.stringify(body))
      .digest('base64');

    return signature === xLineSignature;
  }
}
