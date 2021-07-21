import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appNavbar]',
  host: {class: 'navbar'}
})
export class NavbarDirective {
  @Input('appNavbarColor')
  @HostBinding('style.color')
  public color: string = 'red'

  constructor() {
  }

}
