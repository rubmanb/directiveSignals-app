import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string){
    this._color = value;
    this.setColor();
  }

  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = this.el;
  }

  ngOnInit(): void {
    this.setColor();
  }

  setColor():void{
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(){
    if(!this.htmlElement) return;
    if(!this._errors){
      this.htmlElement.nativeElement.innerHTML = '';
      return;
    }
    const errors = Object.keys(this._errors);
    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }else if(errors.includes('minlength')){
      this.htmlElement.nativeElement.innerHTML = 'El tamaño mínimo es de 6 carácteres';
      return;
    }else if(errors.includes('email')){
      this.htmlElement.nativeElement.innerHTML = 'El email no está bien escrito';
    }
  }

}
