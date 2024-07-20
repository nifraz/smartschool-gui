import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(
    private snackBar: MatSnackBar,
    private zone: NgZone,
  ) {}

  show(message: string, action: string = 'Close', config: MatSnackBarConfig = {}) {
    this.zone.run(() => {
      this.snackBar.open(message, action, {
      duration: config.duration || 3000,
      horizontalPosition: config.horizontalPosition || 'right',
      verticalPosition: config.verticalPosition || 'bottom',
      panelClass: config.panelClass || '',
    });
    });
  }

  info(message: string, action: string = 'Close', duration: number = 3000) {
    this.show(message, action, {
      duration,
      panelClass: ['toast-info'],
    });
  }

  success(message: string, action: string = 'Close', duration: number = 3000) {
    this.show(message, action, {
      duration,
      panelClass: ['toast-success'],
    });
  }

  warning(message: string, action: string = 'Close', duration: number = 3000) {
    this.show(message, action, {
      duration,
      panelClass: ['toast-warning'],
    });
  }

  error(message: string, action: string = 'Close', duration: number = 3000) {
    this.show(message, action, {
      duration,
      panelClass: ['toast-error'],
    });
  }
}
