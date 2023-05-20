import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model101',
  templateUrl: './ng-model101.component.html',
  styleUrls: ['./ng-model101.component.css']
})
export class NgModel101Component implements OnInit{

  title: string = 'this is title';
  constructor(){}
  
  ngOnInit(): void {
    
  }
}
