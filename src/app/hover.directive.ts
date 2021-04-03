import { Directive, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

   constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.setBgColor('black')
   }
   setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('aqua')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('black')
  }
}


