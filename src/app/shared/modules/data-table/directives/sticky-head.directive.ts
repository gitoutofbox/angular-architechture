import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[stickyHead]'
})
export class StickyHeadDirective {

  constructor(private el: ElementRef) { }
  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    let elementYPosition = this.el.nativeElement.getBoundingClientRect().y;
    const windowScroll = window.pageYOffset;
    let topSpace = 50;
    if(elementYPosition < 0 && !this.el.nativeElement.classList.contains('sticky')){
      this.el.nativeElement.classList.add('sticky');
      this.el.nativeElement.style.position = 'fixed';
      this.el.nativeElement.style.top = 0;
      //this.el.nativeElement.style.left = '-1px';
    } else if(windowScroll <= topSpace && this.el.nativeElement.classList.contains('sticky')) {
      this.el.nativeElement.classList.remove('sticky');        
      this.el.nativeElement.style.position = '';
      this.el.nativeElement.style.top = '';
    }
  }
}
