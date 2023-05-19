import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Observable has single instance(obj)
 * meaning observer cannot be resuse or reshare
 * and cannot be access outside its original observable. Each observable has its own observer
 * 
 */

export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-101';
  observable$: Observable<Number>;

  interval$: Subscription;

  constructor(private router : Router){}

  ngOnInit() {

    console.log('comnponent: AppComponent start...')
    this.observable$ = Observable.create((observer: Observer<any>) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      console.log('###################################');

    });

    /* 
    * cannot do : 
    observer.next() as it's outside its original observable. Can be done with Subject
    */
    
    this.observable$.subscribe(
      value => console.log(value),
      err => {},
      () => console.log('this is the end.....')
    );
  }

  ngOnDestroy(): void {
    
    if(this.interval$){
      this.interval$.unsubscribe;
    }
  }

}
