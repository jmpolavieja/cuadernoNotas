import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FirestoreService} from '../../services/firestore.service';
import {Nota} from '../../models/nota';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';

@Component({
  selector: 'app-detalle-nota',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    MatButton,
    RouterLink,
    MatIcon,
    MatIconButton,
    MatProgressSpinner,
    MatGridList,
    MatGridTile
  ],
  templateUrl: './detalle-nota.component.html',
  styleUrl: './detalle-nota.component.css'
})
export class DetalleNotaComponent {

  miFormulario: FormGroup;
  datosCargados = false;
  nuevo = false;
  nota!: Nota;
  imagenes: string[] = [];

  private router = inject(ActivatedRoute);
  private ruta = inject(Router);
  private dataService = inject(FirestoreService);
  private snackBar = inject(MatSnackBar);
  imagenPreview: string | null = null;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      titulo: ['', Validators.required],   // Campo obligatorio
      contenido: ['', Validators.required], // Campo obligatorio
      id: [''],
    });
    this.nota = { ...this.miFormulario.value, imagenes: []};
    console.log('La nota es: ', this.nota);
  }



  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id')!;
    if (id) {
      this.dataService.detalleNota(id).subscribe(resp => {
        console.log(resp);
        this.datosCargados = true;
        this.miFormulario.patchValue(
          {
            id: resp.id,
            titulo: resp.titulo,
            contenido: resp.contenido
          });
          if (resp.imagenes){
            this.imagenes = resp.imagenes;
          }
      });
    } else {
      this.datosCargados = true;
      this.nuevo = true;
    }
  }

  updateNota(): void {
    console.log(this.imagenes);
    let nota = {...this.miFormulario.value, imagenes: this.imagenes};
    console.log(nota);
    this.dataService.updateNota(nota).then(resp => {
      console.log(resp);
      this.snackBar.open('Actualización completada con éxito', 'Undo', {
        duration: 3000,
      });
      this.ruta.navigate(['/']);
    });
  }

  addNota() {
    let nota = {...this.miFormulario.value, imagenes: this.imagenes};
    this.dataService.newNota(nota).then(resp => {
      this.snackBar.open('Nota creada con éxito', 'Undo', {
        duration: 3000,
      });
      this.nuevo = false;
    });
  }

  seleccionarImagen(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.imagenes.push(base64String);
        // this.imagenPreview = base64String;
      };
      reader.readAsDataURL(file);
      this.nota.imagenes = this.imagenes;
    }
  }

}
