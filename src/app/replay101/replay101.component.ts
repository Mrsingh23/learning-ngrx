import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay101',
  templateUrl: './replay101.component.html',
  styleUrls: ['./replay101.component.css']
})
/**
 * Use when we want every new subscriber to get all the value of the subject since beginning.
 */
export class Replay101Component implements OnInit, OnDestroy{
  replayVar$ : ReplaySubject<any>;
  ngOnInit(): void {
    this.replayVar$ = new ReplaySubject();
    console.log('##################################');
    console.log('********* Replay101Component ************');
    this.replayVar$.subscribe(payload => console.log('first subscribe: ' + payload));
    this.replayVar$.next(333);
    this.replayVar$.next(444);
    this.replayVar$.next(555);
    this.replayVar$.next(666);

    this.replayVar$.subscribe(payload => console.log('second subscribe: ' + payload));
    this.replayVar$.next(101010);


  }
  ngOnDestroy(): void {
    
  }

}
