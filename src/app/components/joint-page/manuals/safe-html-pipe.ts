import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'safehtml'})

export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  public transform(value): SafeHtml {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
