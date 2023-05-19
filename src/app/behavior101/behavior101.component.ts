import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior101',
  templateUrl: './behavior101.component.html',
  styleUrls: ['./behavior101.component.css']
})
/**
 * Same as subject except it get latest current new value as soon as we subscribe for next subscriber
 * And requires initial value;
 */
export class Behavior101Component implements OnInit, OnDestroy {

behaviorVar$ : BehaviorSubject<any>;
ngOnInit(): void {

  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');
  console.log('Behavior101Component..........')
  this.behaviorVar$ = new BehaviorSubject(999);
  this.behaviorVar$.subscribe(payload => console.log('first subscriber: ' + payload));
  this.behaviorVar$.next(80);
  this.behaviorVar$.next(90);
  this.behaviorVar$.next(120);

  //any new subscribe gets latest current value.
  // in this case : 120 from line above: this.behaviorVar$.next(120);
  this.behaviorVar$.subscribe(payload => console.log('second subscriber: ' + payload)); 
  this.behaviorVar$.next(222);
}

ngOnDestroy(): void {
  
}

}
