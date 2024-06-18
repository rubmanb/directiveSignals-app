import { Component, OnDestroy, OnInit, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-pages',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPagesComponent implements OnInit, OnDestroy {


  public counter = signal(10);
  public user = signal<User>({
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  });

  public userChangeEffect = effect( () => {
    console.log(`${this.user().first_name} - ${this.counter()}`)
  })

  onFieldUpdated( field: keyof(User), value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // }) // Este código puede provocar errores y qu alguien pueda modificar los datos

    // Lo que se requiere es mutar los datos

    this.user.update(current => {

      switch(field){
        case 'email': current.email = value; break;
        case 'avatar': current.avatar = value; break;
        case 'first_name': current.first_name = value; break;
        case 'last_name': current.last_name = value; break;
        case 'id': current.id = Number(value); break;
      }
      return current;
    });
  }

  ngOnInit(): void {
    setInterval( () => {
      this.counter.update( current => current + 1)
    }, 1000)
  }

  ngOnDestroy(): void {
    // this.userChangeEffect.destroy();
  }

  increaseBy(value: number) {
    this.counter.update( current => current + value);
  }



}
