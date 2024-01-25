import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../app/components/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Quantum games';
  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    console.log('Antes de mostrar la pantalla de carga');
    this.loadingService.showLoader();

    setTimeout(() => {
      console.log('Simulación de carga completada');
      // Lógica de carga de tu aplicación aquí

      this.loadingService.hideLoader();
      console.log('Después de ocultar la pantalla de carga');
    }, 3000);
  }



}
