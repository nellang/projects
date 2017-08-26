import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input()
  public appTooltip: string;
  @Input()
  public newText: string;

  private tooltipElement = document.createElement('div');

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter')
  showTooltip() {
    this.tooltipElement.innerText = this.appTooltip + ' ' + this.newText;
    this.element.nativeElement.appendChild(this.tooltipElement);
  }

  @HostListener('mouseleave')
  hideTooltip() {
    this.element.nativeElement.removeChild(this.tooltipElement);
  }

}
