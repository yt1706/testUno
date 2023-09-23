import { Component, OnInit, Input } from '@angular/core';
import { IParticipantes } from '../interfaz_contenedora/IParticipantes';

@Component({
  selector: 'app-part-inactivos',
  templateUrl: './part-inactivos.component.html',
  styleUrls: ['./part-inactivos.component.scss'],
})
export class PartInactivosComponent  implements OnInit {

  @Input()
  public inactivos: IParticipantes[] = []

  constructor() { }

  ngOnInit() {}

}
