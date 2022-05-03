import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeFont]'
})
export class ChangeFontDirective {

  @Input() fontSize: number;
  @Input() appChangeFont: boolean;

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('click') onClick() {
    if (!!this.appChangeFont) {
      this.updateFontSize();
    } else {
      console.log('CAN\'T DO THAT AT THE MOMENT');
    }
  }


  private updateFontSize(): void {
    this.el.nativeElement.style.fontSize = `${this.fontSize}px`;
  }
}
