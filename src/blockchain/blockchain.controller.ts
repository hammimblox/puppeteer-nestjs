import { Controller, Logger } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('blockchain')
export class BlockchainController {

  private readonly logger = new Logger(BlockchainService.name);

  constructor(private readonly blockchainService: BlockchainService) { }

  @Cron(CronExpression.EVERY_HOUR, {
    timeZone: "Asia/Bahrain"
  })
  async handleCron() {
    const apiRes = await fetch("http://notary-report.d2vqlvggwx1cng.amplifyapp.com/api/blockchain", {
      method: "GET"
    })
    this.logger.debug(apiRes.ok);
  }
}
