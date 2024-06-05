import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyJobDirective]'
})
export class MyJobDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#e1e4e8');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius' ,'10px' )

  }

}
