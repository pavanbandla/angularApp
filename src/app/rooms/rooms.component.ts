import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit{

  HotelName = 'Hilton hotel';
  numberOfRooms: any;


  constructor(){}
ngOnInit(): void {
  
}
}
