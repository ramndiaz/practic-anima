import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('estado', [
      state('inactivo', style({
        backgroundColor: 'black',
        transform: 'scale(1)',
        color: 'blue'
      })),
      state('activo', style({
        backgroundColor: 'blue',
        transform: 'scale(2.0)',
        color: 'black'
      })),
      transition('inactivo => activo', animate('1000ms ease-in')),
      transition('activo => inactivo', animate('1000ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'anima';
  estado: string = 'inactivo';
  cambioEstado(){
    this.estado =(this.estado=='activo') ? 'inactivo':'activo';
  }
}
