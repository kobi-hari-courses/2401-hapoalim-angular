import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, firstValueFrom, tap } from 'rxjs';
import { itut, mechushav } from './itut';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalsDemoComponent {
  readonly a = signal(2);
  readonly b = signal(2);

  readonly c = computed(() => this.a() + this.b());
  
  constructor() {
    // effect(async () => {
    //   console.log('C is', this.c());
    // });

    setTimeout(() => {
      this.a.set(100);
      this.b.set(200);
      console.log('A has changed', this.a());
    }, 5000);
  }

  changeA() {
    this.a.set(100);
  }

  changeB() {
    this.b.set(200);
  }

  changeBoth() {
    this.a.set(3);
    this.b.set(3);
  }

  // town$ = new BehaviorSubject('Manchester');
  // postfix$ = new BehaviorSubject('City');

  // team$ = combineLatest(
  //   [this.town$, this.postfix$],
  //   (town, postfix) => `${town} ${postfix}`
  // ).pipe(
  //   debounceTime(0),
  //   tap(val => console.log('Team changed to ', val))
  // );

  // async go() {
  //   const team = await firstValueFrom(this.team$)
  //   // do something with team
  // }

  // constructor() {
  //   setTimeout(() => {
  //     this.postfix$.next('United');
  //     this.town$.next('Leads');
  //   }, 5000);
  // }
}
