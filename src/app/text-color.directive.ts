import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class TextColorDirective {

  @HostListener('click', ['$event']) elementClick({srcElement, target}) {
    /* e안에는 event객체가 들어온다.
     this는 directive 객체를 지칭.*/
    // console.log(e);
    // console.log(toString.call(e));
    alert(srcElement.innerHTML);
    console.log(target.innerHTML);

    /*이벤트를 처리하기 위해 @HostListener decorator를 이용했습니다.
      여기서 host라는 표현이 나오는데 지금 우리 예제에서 myColor 속성을
      적용한 HTML Element를 host라고 지칭합니다.*/
  }

  constructor(elementref: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementref.nativeElement,'color','darkred');
  }

}
