import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color = 'blue';
  @Input() fontWeight = 'normal';
  @Input() dStyles: {border?: string, borderRadius?: string};

  @HostBinding('style.fontSize') elSize = '1rem';

  constructor(private el: ElementRef, private r: Renderer2) {
    el.nativeElement.style.color = 'red';
    this.r.setStyle(this.el.nativeElement, 'font-size', '2rem');
  }

  @HostListener('click', ['$event.target'])
  onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter')
  onEnter(): void {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    this.elSize = '2,5rem';
  }
  @HostListener('mouseleave')
  onLeave(): void {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
    this.elSize = '2rem';
  }
}
