import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { PetType } from './models/pet.model';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {
  @Input() petType;
  @HostBinding('style.backgroundColor') public backgroundColor = 'none';
  constructor() { }
  @HostListener('mouseenter') public mouseEnter() {
    if (this.petType === PetType.DOG) {
      console.log('enter');
      this.backgroundColor = 'blue';

    }
    if (this.petType === PetType.CAT) {
      this.backgroundColor = 'red';

    }
  }
  @HostListener('mouseleave') public mouseLeave() {
      this.backgroundColor = 'transparent';

    }
}