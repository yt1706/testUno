import { Component, OnInit, Input } from '@angular/core';
import { IParticipantes} from '../interfaz_contenedora/IParticipantes';

@Component({
  selector: 'app-listar-participantes',
  templateUrl: './listar-participantes.component.html',
  styleUrls: ['./listar-participantes.component.scss'],
})
export class ListarParticipantesComponent  implements OnInit {

  @Input()
  public var_part!: IParticipantes;

 

  ngOnInit() {}

}
