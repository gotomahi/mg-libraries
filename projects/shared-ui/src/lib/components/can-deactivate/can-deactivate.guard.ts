import {CanDeactivate} from '@angular/router';
import {ComponentCanDeactivate} from './component-can-deactivate';
import {Injectable} from '@angular/core';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {L

  canDeactivate(component: ComponentCanDeactivate): boolean {
    return component.canDeactivate();
  }
}
