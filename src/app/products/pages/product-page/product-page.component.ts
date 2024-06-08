import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  private formBuilder = inject(FormBuilder);
  public color = 'green';

  public myForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  });


  changeColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
