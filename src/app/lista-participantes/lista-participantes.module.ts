import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaParticipantesPageRoutingModule } from './lista-participantes-routing.module';

import { ListaParticipantesPage } from './lista-participantes.page';
import { ListarParticipantesComponent } from './listar-participantes/listar-participantes.component';
import { PartActivosComponent } from './part-activos/part-activos.component';
import { PartInactivosComponent } from './part-inactivos/part-inactivos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaParticipantesPageRoutingModule
  ],
  declarations: [
    ListaParticipantesPage, 
    ListarParticipantesComponent,
    PartActivosComponent,
    PartInactivosComponent
  ]
})
export class ListaParticipantesPageModule {}
