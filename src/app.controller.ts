import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { CreatePdfDto } from './dto/CreatePdfDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async generatePdf(@Body() dto: CreatePdfDto) {
    const pdfBuffer = await this.appService.generatePDF(dto);
    return pdfBuffer

  }

  @Post("pdf")
  async getPdf(@Res() res: Response, @Body() dto: CreatePdfDto) {
    const pdfBuffer = await this.appService.getPdf(dto);

    try {
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="generated.pdf"',
        'Content-Length': pdfBuffer.length,
      });

      res.end(pdfBuffer);

    } catch (error) {
      console.log("error in nestjs", error);

    }
  }
  @Post("pdf/buffer")
  async getPdfUint8Array(@Res() res: Response, @Body() dto: CreatePdfDto) {
    const pdfUint8Array = await this.appService.getPdfBuffer(dto);

    try {

      return { data: Array.from(pdfUint8Array) }
    } catch (error) {
      console.log("error in nestjs", error);
      return { error }
    }
  }
  @Post("pdf/compressed")
  async getCompressedPdf(@Res() res: Response, @Body() dto: CreatePdfDto) {
    const pdfBuffer = await this.appService.getCompressedPdf(dto);

    try {
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="generated.pdf"',
        'Content-Length': pdfBuffer.length,
      });

      res.end(pdfBuffer);

    } catch (error) {
      console.log("error in nestjs", error);

    }
  }
}
