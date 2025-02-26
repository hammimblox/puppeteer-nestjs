import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { CreatePdfDto } from './dto/CreatePdfDto';

@Injectable()
export class AppService {
  async generatePDF(dto: CreatePdfDto): Promise<any> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(dto.content);

    const pdfBuffer = await page.pdf({
      format: 'A4',
      margin: { top: "220px", bottom: "70px", left: "50px", right: "50px" },
      displayHeaderFooter: true,
      headerTemplate: dto.headerTemplate,
      footerTemplate: dto.footerTemplate
    });

    await browser.close();
    return pdfBuffer
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');
    return pdfBase64
  }

}
