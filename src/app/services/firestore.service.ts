import {inject, Injectable} from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  updateDoc,
  addDoc,
  deleteDoc
} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Nota} from '../models/nota';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  // 1. inyectar angular firestore
  private afs = inject(Firestore);

  //2. Métodos del CRUD de notas
  getNotas(): Observable<Nota[]> {
    const colRef = collection(this.afs, 'notas');
    return collectionData(colRef, { idField: 'id'}) as Observable<Nota[]>;
  }

  detalleNota(id: string): Observable<Nota> {
    const docRef = doc(this.afs, 'notas', id);
    return docData(docRef) as Observable<Nota>;
  }

  updateNota(nota: any) {
    const docRef = doc(this.afs, `notas/${nota.id}`);
    return updateDoc(docRef, nota);
  }

  newNota(nota: any) {
    const colRef = collection(this.afs, 'notas');
    return addDoc(colRef, nota);
  }

  deleteNota(id: string) {
    const docRef = doc(this.afs, `notas/${id}`);
    return deleteDoc(docRef);
  }

}
