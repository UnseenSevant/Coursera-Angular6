import { Component, OnInit,Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoViajes } from '../models/exportClassDestinoViajes';

@Component({
  selector: 'app-destino-viajes',
  templateUrl: './destino-viajes.component.html',
  styleUrls: ['./destino-viajes.component.css']
})
export class DestinoViajesComponent implements OnInit {

  @Input() destino:DestinoViajes;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked:EventEmitter<DestinoViajes>;


  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit() {
  }

  ir() {
    this.clicked.emit(this.destino)
    return false;

  }

}
