import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html'
})
export class HeroeComponent{

    nombre:string='Spiderman'
    edad:number=34


     
     get nombreCapitalizado() {
         return  this.nombre.toUpperCase();
     }
     
     obtenerNombre():string{
         return `${this.nombre}-${this.edad}`
     }

     cambiarNombre():string{

         return this.nombre='Iron man';
     }

     cambiarEdad():number{
         return this.edad=32;
     }
}