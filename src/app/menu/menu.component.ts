import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
  }
  Juego(tipo: string) {
    switch (tipo) {
      case 'anagrama':
          this.router.navigate(['/anagrama']);
        break;
      case 'agilidadaritmetica':
          this.router.navigate(['agilidadaritmetica']);
        break;
      case 'piedrapapeltijera':
          this.router.navigate(['piedrapapeltijera']);
        break;
      case 'anagrama':
          this.router.navigate(['anagrama']);
        break;
      case 'simon':
          this.router.navigate(['simon']);
        break;
    }
  }

}
