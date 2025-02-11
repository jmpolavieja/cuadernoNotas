import {Component, inject} from '@angular/core';
import {MatActionList, MatList, MatListItem, MatListItemLine} from '@angular/material/list';
import {MatLine} from '@angular/material/core';
import {FirestoreService} from '../../services/firestore.service';
import {MatIcon} from '@angular/material/icon';
import {MatFabButton, MatMiniFabButton} from '@angular/material/button';
import { RouterLink} from '@angular/router';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [
    MatListItem,
    MatList,
    MatLine,
    MatIcon,
    MatFabButton,
    RouterLink,
    MatListItemLine,
    MatActionList,
    MatMiniFabButton,
    MatProgressSpinner
  ],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  notas: any[] = [];
  firestoreService = inject(FirestoreService);
  cargando = true;

  ngOnInit() {
    this.firestoreService.getNotas().subscribe(notas => {
      this.cargando = false;
      this.notas = notas;
    });
  }

  eliminarNota(idNota: any) {
    if(confirm('¿Eliminar la nota?')) {
      this.firestoreService.deleteNota(idNota).then(() => {
        console.log('Nota borrada');

      }  ).catch(error => {
        console.error('No se ha podido borrar la nota: ', error)
      })
    }
  }


}
