import { Directive, OnInit, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDhover]'
})
export class DhoverDirective implements OnInit {
  constructor(private Element: ElementRef, private render: Renderer2) {
    console.log(Element);
    // this.Element.nativeElement.style.backgroundColor = 'blue';

  }
  @Input() hoverColor: string = 'pink';
  @Input() defaultBg: string = 'gold';

  ngOnInit() {
    this.render.setStyle(this.Element.nativeElement, 'background-color', this.defaultBg);
    this.render.setStyle(this.Element.nativeElement, 'cursor', 'pointer');
    this.render.addClass(this.Element.nativeElement, 'text');
  }
  @HostListener('mouseenter') MouseEnter() {
    this.render.setStyle(this.Element.nativeElement, 'background-color', 'gold');
    this.render.addClass(this.Element.nativeElement, 'hover');
  }
  @HostListener('mouseleave') MouseLeave() {
    this.render.setStyle(this.Element.nativeElement, 'background-color', this.defaultBg);
    this.render.removeClass(this.Element.nativeElement, 'hover');
  }
}
