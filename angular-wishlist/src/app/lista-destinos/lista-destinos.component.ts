import { Component, OnInit,} from '@angular/core';
import { DestinoViajes } from '../models/exportClassDestinoViajes';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
/* LISTA DE DESTINOS ARRAY */
export class ListaDestinosComponent implements OnInit {
  destinos:DestinoViajes[];
  constructor() {
    this.destinos = [];
   }

  ngOnInit(){
  }

  guardar(
    nombre:string,
    url:string):boolean {
   
    this.destinos.push(new DestinoViajes(nombre,url));
    return false;
    }

    elegido(d:DestinoViajes){
      this.destinos.forEach(function(x){x.setSelected(false); });
      d.setSelected(true);
    }
}
