import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  
 heroes:string[]=['Spiderman','iron man','Hulk','Vegetta'];
  mensaje:string='No hay nada que mostrar';
  heroeBorrado:string='';
  
   borrarHeroe(){
    
    if(this.heroes.length>=1)
    this.heroeBorrado=this.heroes.shift() || '';
      
    }

 
  }
  


