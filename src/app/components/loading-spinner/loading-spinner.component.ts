// loading.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(true);
  public loading$ = this.loadingSubject.asObservable();

// loading.service.ts

showLoader() {
  console.log('Mostrar pantalla de carga');
  this.loadingSubject.next(true);
}

hideLoader() {
  console.log('Ocultar pantalla de carga');
  this.loadingSubject.next(false);
}

}
