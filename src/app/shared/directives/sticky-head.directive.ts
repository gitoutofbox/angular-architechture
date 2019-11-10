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
    if(elementYPosition < 0 && !this.el.nativeElement.classList.contains('sticky')){
      this.el.nativeElement.classList.add('sticky');
    } else if(windowScroll == 0 && this.el.nativeElement.classList.contains('sticky')) {
      this.el.nativeElement.classList.remove('sticky');        
    }
  }
}
