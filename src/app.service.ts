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
      margin: { top: "200px", bottom: "70px", left: "50px", right: "50px" },
      displayHeaderFooter: true,
      headerTemplate: dto.headerTemplate,
      footerTemplate: dto.footerTemplate
    });

    await browser.close();
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');
    return pdfBase64
  }
  async getPdf(dto: CreatePdfDto): Promise<any> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.addStyleTag({
      content: `
        @font-face {
          font-family: 'Noto Naskh Arabic';
          src: url('https://github.com/Ailuro-Poda/ExpoArabicLightFont/raw/refs/heads/main/ExpoArabicLight.ttf');
        }

        @font-face {
          font-family: 'Aptos Display';
          src: url('http://localhost:3002/fonts/aptos-display.ttf');
        }
        @font-face {
          font-family: 'Aptos';
          src: url('http://localhost:3002/fonts/aptos-display.ttf');
        }

        body {
          font-family: 'Noto Naskh Arabic', serif;
        }
        .footerC {
          font-family: 'Noto Naskh Arabic', serif;
        }
        .headerC {
          font-family: 'Noto Naskh Arabic', serif;
        }
      `,
  });
    await page.setContent(dto.content);
    
  //   await page.evaluate(() => {
  //     const table = document.getElementsByTagName("table");
  //     const rows = table[0].getElementsByTagName("tr");

  //     for (let row of rows) {
  //         const cells = row.getElementsByTagName("td");
  //         if (cells.length === 2) {
  //             let tempContent = cells[0].innerHTML;
  //             cells[0].innerHTML = cells[1].innerHTML;
  //             cells[1].innerHTML = tempContent;

  //             // Apply styling dynamically
  //             cells[0].style.textAlign = "left";
  //             cells[1].style.textAlign = "right";
  //             cells[0].style.fontSize = "18px";
  //             cells[1].style.fontSize = "18px";
  //         }
  //     }
  // });
    const pdfBuffer = await page.pdf({
      format: 'A4',
      margin: { top: "200px", bottom: "70px", left: "50px", right: "50px" },
      displayHeaderFooter: true,
      headerTemplate: dto.headerTemplate,
      footerTemplate: dto.footerTemplate
    });
    try {

      await browser.close();
      return pdfBuffer

    } catch (error) {
      console.log("pdfBuffer error", error);

    }
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');
    return pdfBase64
  }

  async getPdfBuffer(dto: CreatePdfDto) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.addStyleTag({
      content: `
        @font-face {
          font-family: 'Noto Naskh Arabic';
          src: url('https://github.com/Ailuro-Poda/ExpoArabicLightFont/raw/refs/heads/main/ExpoArabicLight.ttf');
        }

        @font-face {
          font-family: 'Aptos Display';
          src: url('http://localhost:3002/fonts/aptos-display.ttf');
        }
        @font-face {
          font-family: 'Aptos';
          src: url('http://localhost:3002/fonts/aptos-display.ttf');
        }

        body {
          font-family: 'Noto Naskh Arabic', serif;
        }
        .footerC {
          font-family: 'Noto Naskh Arabic', serif;
        }
        .headerC {
          font-family: 'Noto Naskh Arabic', serif;
        }
      `,
  });
    await page.setContent(dto.content);
    
  //   await page.evaluate(() => {
  //     const table = document.getElementsByTagName("table");
  //     const rows = table[0].getElementsByTagName("tr");

  //     for (let row of rows) {
  //         const cells = row.getElementsByTagName("td");
  //         if (cells.length === 2) {
  //             let tempContent = cells[0].innerHTML;
  //             cells[0].innerHTML = cells[1].innerHTML;
  //             cells[1].innerHTML = tempContent;

  //             // Apply styling dynamically
  //             cells[0].style.textAlign = "left";
  //             cells[1].style.textAlign = "right";
  //             cells[0].style.fontSize = "18px";
  //             cells[1].style.fontSize = "18px";
  //         }
  //     }
  // });
    const pdfBuffer = await page.pdf({
      format: 'A4',
      margin: { top: "200px", bottom: "70px", left: "50px", right: "50px" },
      displayHeaderFooter: true,
      headerTemplate: dto.headerTemplate,
      footerTemplate: dto.footerTemplate
    });
    try {

      await browser.close();
      return pdfBuffer

    } catch (error) {
      console.log("pdfBuffer error", error);

    }
    return pdfBuffer
  }

}
