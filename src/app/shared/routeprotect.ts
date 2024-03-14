import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class RouteProtect implements CanActivate {
  isAllowed = false;
  canActivate() {
    if (!this.isAllowed) {
      alert('Not allowed');
    } else {
      this.isAllowed = true;
    }
    return this.isAllowed;
  }
}
