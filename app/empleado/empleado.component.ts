import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //ESTO ES INLINE SE UTILIZA PARA APLICACIONES PEQUEÑAS INTRUDUCIENDO
  //EL CODIGO DIRECTAMENTE DESDE EL TS
  //template:"<p>Aqui va un empleado</p>", 
  //styles:["p{background-color: brown;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="Harold";
  apellido="Flores";
  // private edad=37; // SE PUEDE PROTEGER Y SE REQUIERE DE UNA FUNCION QUE RETORNE EDAD getEdad()
   //edad=37;
  //empresa="ClaroChile";


  /*getEdad(){
    return this.edad;
  }*/
  //FUNCION PARA ACTUALIZAR TEXTO INTERPOLADO
  //llamaEmpresa(value:String){}

//PROPERTY BIDING PROPIEDAD DE UN OBEJO
  habilitacionCuadro=false;
  usuRegistrado=true;

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
