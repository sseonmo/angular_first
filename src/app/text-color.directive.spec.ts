import { TextColorDirective } from './text-color.directive';
import {ElementRef, Renderer2} from "@angular/core";

describe('TextColorDirective', () => {
  it('should create an instance', () => {
    let elementref: ElementRef;
    let renderer: Renderer2;
    const directive = new TextColorDirective(elementref, renderer);
    expect(directive).toBeTruthy();
  });
});
