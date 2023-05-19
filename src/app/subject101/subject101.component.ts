import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject101',
  templateUrl: './subject101.component.html',
  styleUrls: ['./subject101.component.css']
})
/**
 * Allows to use reuse observer unlike observable which has single instance(obj)
 * meaning observer cannot be resuse or reshare
 * and cannot be access outside its original observable. Each observable has its own observer
 * 
 * Since Subject is both Observable and an Observer. 
 * You can subscribe and call next like with observer well as error and complete like with Observable from anywhere.
 * 
 * IMPORTANT: Once complete/error method is called on Subject. we cannot subscribe, even if we do will be ignore
 * therefore, better to use unsubscribe as it throws error
 * 
 * eg: 
   
          this.subject$.subscribe(payload => console.log('first subscribe: ' + payload)); 
          this.subject$.next(10);
          this.subject$.next(20);
          this.subject$.complete(); - use  this.subject$.unsubscribe(); as it throws compilation error
          this.subject$.subscribe(payload => console.log('second subscribe: ' + payload)); //gets ignored without error
          this.subject$.next(3000);  // gets ignored
     
 */

export class Subject101Component implements OnInit, OnDestroy{

  subject$: Subject<Number>;
  
  ngOnInit(): void {
  
    console.log('comnponent: Subject101Component start...')
    this.subject$ = new Subject();
    /** 
     * Subscribe first and then next() as we get notify of the even only after we subscribe.
     * eg: this will only console: 40 
     * Because we have subscribe after 30
     *    
          this.subject$.next(10);
          this.subject$.next(20);
          this.subject$.next(30);
          this.subject$.subscribe(payload => console.log('first subscribe: ' + payload)); 
          this.subject$.next(40);
     */
    this.subject$.subscribe(payload => console.log('first subscribe: ' + payload)); 
    this.subject$.next(10);
    this.subject$.next(20);
    this.subject$.next(30);


    this.subject$.subscribe(payload => console.log('second subscribe: ' + payload));
    this.subject$.next(40);

    console.log('comnponent: Subject101Component end....')


  }

  ngOnDestroy(): void {

    this.subject$.unsubscribe();
    
  }

}
