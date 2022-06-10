import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDownDirective]'
})
export class DropDownDirectiveDirective {

  constructor() { }
  isopen = false;

   
  @HostListener('click') toggleopen(){
      this.isopen = !this.isopen;

  }

}
