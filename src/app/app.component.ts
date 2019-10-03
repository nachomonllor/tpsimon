import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; // For firebase
import { Observable } from 'rxjs'; // For firebase

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP2';
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }
}
