import { Injectable } from '@angular/core';

// import { Firestore, collectionData, collection } from '@angular/fire/firestore';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clientsCollection!: AngularFirestoreCollection<Client>;
  clientDoc!: AngularFirestoreDocument<Client>;
  clients!: Observable<Client[]>;
  client!: Observable<Client>;

  constructor(private afs: AngularFirestore) {
    this.clientsCollection = afs.collection('clients', (ref) =>
      ref.orderBy('lastName', 'asc')
    );
  }

  getClients(): Observable<Client[]> {
    // Get clients with the id
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map((changes) =>
        changes.map((action) => {
          const data = action.payload.doc.data() as Client;
          data.id = action.payload.doc.id;
          return data;
        })
      )
    );
    return this.clients;
  }
}
