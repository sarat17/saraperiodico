import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Noticia } from '../interfaces/noticias';

@Injectable({
  providedIn: 'root'
})
export class NewSvcService {

  private noticiasCollection?: AngularFirestoreCollection<Noticia> | undefined

  constructor(private readonly  afs: AngularFirestore) { }

  public getNews(): Observable<Noticia[]>{
         
    this.noticiasCollection = this.afs.collection<Noticia>('noticias', p=> p.orderBy('order','asc'));
 
    return this.noticiasCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Noticia;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

}
