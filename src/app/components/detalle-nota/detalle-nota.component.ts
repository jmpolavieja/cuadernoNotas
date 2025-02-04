import {Component, inject} from '@angular/core';
import {MatListItem} from '@angular/material/list';
import {MatLine} from '@angular/material/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FirestoreService} from '../../services/firestore.service';
import {Nota} from '../../models/nota';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-detalle-nota',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    MatButton,
    RouterLink,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './detalle-nota.component.html',
  styleUrl: './detalle-nota.component.css'
})
export class DetalleNotaComponent {

  miFormulario: FormGroup;

  nota: Nota = {id: '', titulo: '', contenido: ''};
  private router = inject(ActivatedRoute);
  private dataService = inject(FirestoreService);

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      titulo: ['', Validators.required],   // Campo obligatorio
      contenido: ['', Validators.required] // Campo obligatorio
    });
  }
  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id')!;
    this.dataService.detalleNota(id).subscribe( resp => {
      console.log(resp);
        this.miFormulario.patchValue(
          {
            titulo: resp.titulo,
            contenido: resp.contenido
          }
        );
      }
    );
  }
}
