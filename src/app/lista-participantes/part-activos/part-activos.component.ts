import { Component, OnInit, Input } from '@angular/core';
import { IParticipantes } from '../interfaz_contenedora/IParticipantes';

@Component({
  selector: 'app-part-activos',
  templateUrl: './part-activos.component.html',
  styleUrls: ['./part-activos.component.scss'],
})
export class PartActivosComponent  implements OnInit {

  @Input()
  public activos: IParticipantes[] = []


  constructor() { }

  ngOnInit() {}

}
