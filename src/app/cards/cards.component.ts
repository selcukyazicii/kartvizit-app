import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardItem={
    title:'Senior Full Stack Developer',
    name:'Selçuk Yazıcı',
    phone:'+905532898241',
    email:'selo@gmail.com',
    address:'İzmit',
  }
constructor(
  public dialog:MatDialog
){}
ngOnInit(): void {
    
}
}
