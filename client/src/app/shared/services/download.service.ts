import { Injectable } from '@angular/core';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';;

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  downloadPdf(htmlContent: any, title: string) {
    let doc = new jspdf('p', 'mm', 'a4');
    doc.text(htmlContent, 1, 1)
    doc.save(`${title}.pdf`);
  }


  sendToPdf(contentId: string, title: string): void {
    let data = document.getElementById("content");
    console.log(data);
    html2canvas(data!, {allowTaint:true}).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png', 2.0)
      console.log(contentDataURL);
      let pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in landscape mode

      pdf.addImage(contentDataURL, 'PNG', 0, 0, 21.0, 29.7);
      pdf.save(title);
    });
  }


  makePDF() {

    let quotes = document.getElementById('content');

    html2canvas(quotes!,{allowTaint:true}).then(function(canvas) {
      canvas.getContext('2d');

      let HTML_Width = canvas.width;
      let HTML_Height = canvas.height;

      let top_left_margin = 60;

      let PDF_Width = HTML_Width+(top_left_margin*2);
      let PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
      let canvas_image_width = HTML_Width;
      let canvas_image_height = HTML_Height;

      var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;


      console.log('tutaj', canvas.height+"  "+canvas.width);


      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jspdf('p', 'pt',  [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'PNG',
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height);


      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage('pt', 'p');
        pdf.addImage(imgData, 'PNG',
          top_left_margin, -(PDF_Height*i)+(top_left_margin*2),
          canvas_image_width,
          canvas_image_height);
      }

      pdf.save("HTML-Document.pdf");
    });




  }
}
