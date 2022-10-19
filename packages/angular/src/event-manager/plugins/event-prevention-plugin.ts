import { Injectable, Provider } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { EventListener, EventManagerPlugin, EventUnlistener } from '../event-manager-plugin';

type EventPreventionPluginShortcut = keyof Pick<
  Event,
  'preventDefault' | 'stopPropagation' | 'stopImmediatePropagation'
>;

/**
 * Adds support for event prevention shortcuts to event template expressions. Prevention methods
 * are `preventDefault`, `stopPropagation` and `stopImmediatePropagation`, thus they are available
 * as shortcut like `(click.preventDefault)="..."` or `(click.stopPropagation)="..."`. Multiple shortcuts are
 * also allowed, e.g. `(mouseup.preventDefault.stopImmediatePropagation)="..."`
 */
@Injectable()
export class EventPreventionPlugin extends EventManagerPlugin {
  supports(eventExpr: string): boolean {
    return /\.(preventDefault|stopPropagation|stopImmediatePropagation)/i.test(eventExpr);
  }

  addEventListener(element: Element, eventExpr: string, listener: EventListener): EventUnlistener {
    const ngZone = this.manager.getZone();
    const [eventName, ...shortcutNames] = (eventExpr && eventExpr.split('.')) || [];
    const listenerFn = (event: Event) =>
      ngZone.runGuarded(() => {
        for (const shortcutName of shortcutNames as EventPreventionPluginShortcut[]) {
          const preventFn = event[shortcutName];
          if (typeof preventFn === 'function') {
            preventFn();
          }
        }
        listener(event);
      });
    ngZone.runOutsideAngular(() => element.addEventListener(eventName, listenerFn));
    return () => element.removeEventListener(eventName, listenerFn);
  }
}

export function provideEventPreventionPlugin(): Provider {
  return {
    provide: EVENT_MANAGER_PLUGINS,
    useClass: EventPreventionPlugin,
    multi: true,
  };
}
