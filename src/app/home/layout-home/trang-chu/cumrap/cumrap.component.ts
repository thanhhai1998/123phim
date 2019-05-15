import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cumrap',
  templateUrl: './cumrap.component.html',
  styleUrls: ['./cumrap.component.scss']
})
export class CumrapComponent implements OnInit {
  loairap = 'Cinestar';
  constructor() { }
  ChonLoaiRap(val) {
    this.loairap = val;
  }
  ngOnInit() {
  }

}
