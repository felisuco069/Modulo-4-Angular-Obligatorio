import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef<HTMLElement>) {}

  @HostListener('mouseover')
  highlight() {
    this.element.nativeElement.style.border = '3px solid green';
  }

  @HostListener('mouseleave')
  unhighlight() {
    this.element.nativeElement.style.border = '';
  }
}
