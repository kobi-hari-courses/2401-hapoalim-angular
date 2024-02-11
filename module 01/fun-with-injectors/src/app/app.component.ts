import { Component, DestroyRef, InjectionToken, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyService } from './services/my.service';
import { OtherService } from './services/other.service';
import { urlBuilder } from './config-utils';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const MY_TOKEN = new InjectionToken<number>('MY_TOKEN');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  readonly builder = urlBuilder();

  constructor(
    private parentInector: Injector, 
    private destroyRef: DestroyRef
    ){
      const sub = interval(1000).pipe(
        takeUntilDestroyed()
      )
      .subscribe(val => console.log('Iterval', val));
      // destroyRef.onDestroy(() => sub.unsubscribe());
    }


  go() {
    interval(1000).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();

    const injector = Injector.create({
      providers: [
        {
          provide: MyService, useClass: MyService
        }, 
        {
          provide: MY_TOKEN, useFactory: () => 4 * 40
        }
      ], 
      parent: this.parentInector
    });

    const myService = injector.get(MyService);
    const myService2 = injector.get(MyService);
    console.log(myService);

    const other = injector.get(OtherService);
    const my_token = injector.get(MY_TOKEN);
    console.log(my_token);

  }

  sendHttpWhatever() {
    const url = this.builder('Whatever');
    // const url = runInInjectionContext(
    //   this.parentInector, 
    //   () => buildUrl('Whatever'));
  }
}
