import { Component, OnInit } from '@angular/core';
import { Room } from './rooms'

@Component({
  selector: 'basic-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  HotelName = 'Hilton hotel';

  numberOfRooms = 10;

  hideRooms = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }


  rooms: Room = {
    totalRooms: 20,
    availableRooms: 20,
    bookedRooms: 5
  }
}
