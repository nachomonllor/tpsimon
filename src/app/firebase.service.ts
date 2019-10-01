import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  

  constructor(public db: AngularFirestore) { }
  searchUsers(name){
    
    return this.db.collection('users').doc(name).get();
  }
}
