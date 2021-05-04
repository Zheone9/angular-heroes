import { Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
            <h1>{{titulo}}</h1>
            <button (click)="acumular(base)" class="boton">+{{base}}</button><span>{{numero}}</span>
            <button (click)="acumular(-base)" class="boton">{{-base}}</button><br>
    `

})
export class ContadorComponent{

    titulo:string = 'ContadorApp';
    numero:number=55;
    base:number=5;

    acumular(valor:number){

    this.numero+=valor;
    }
}