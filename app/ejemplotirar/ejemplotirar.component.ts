import { Component, OnInit } from '@angular/core';
//ESTE COMPONENTE FUE CREADO CON ng g c nombre -s -t
//SE CREA COMPONENTE INLINE.
@Component({
  selector: 'app-ejemplotirar',
  template: `
    <p>
      ejemplotirar works!
    </p>
  `,
  styles: [
  ]
})
export class EjemplotirarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
