import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotate]',
})
export class RotateDirective {
  @Input('step')
  public step = 0;
  public counter = 0;
  constructor(private element: ElementRef<HTMLElement>) {}

  @HostListener('click', ['$event'])
  rotate(e: MouseEvent) {
    if (e.shiftKey) {
      this.step -= 10;
      this.element.nativeElement.style.transform =
        'rotate(' + this.step + 'deg)';
    } else {
      this.step += 10;
      this.element.nativeElement.style.transform =
        'rotate(' + this.step + 'deg)';
    }
  }
}
