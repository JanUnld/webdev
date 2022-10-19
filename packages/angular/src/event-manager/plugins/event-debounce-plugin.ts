import { Injectable, Provider } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { EventListener, EventManagerPlugin, EventUnlistener } from '../event-manager-plugin';

/**
 * Adds support for debouncing events inline in template expressions. The expression syntax follows the
 * format `debounce@ms`, therefore the plugin may be used like `(change.debounce@250)="..."`
 */
@Injectable()
export class EventDebouncePlugin extends EventManagerPlugin {
  supports(eventExpr: string): boolean {
    return /\.debounce@\d+/i.test(eventExpr);
  }

  addEventListener(element: Element, eventExpr: string, listener: EventListener): EventUnlistener {
    const ngZone = this.manager.getZone();
    const [eventName, ...options] = (eventExpr && eventExpr.split('.')) || [];
    const durationStr = options?.find((o) => o.trim() === 'debounce')?.split('@')?.[1];
    const duration = durationStr ? parseInt(durationStr) : 100;
    let subscription: Subscription;
    ngZone.runOutsideAngular(() => {
      subscription = fromEvent(element, eventName)
        .pipe(debounceTime(duration))
        .subscribe((event) => ngZone.runGuarded(() => listener(event)));
    });
    return () => subscription.unsubscribe();
  }
}

export function provideEventDebouncePlugin(): Provider {
  return {
    provide: EVENT_MANAGER_PLUGINS,
    useClass: EventDebouncePlugin,
    multi: true,
  };
}
