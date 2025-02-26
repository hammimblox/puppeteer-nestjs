import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { CreatePdfDto } from './dto/CreatePdfDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async generatePdf(@Body() dto: CreatePdfDto) {
    const pdfBuffer = await this.appService.generatePDF(dto );
    return pdfBuffer

  }
}
