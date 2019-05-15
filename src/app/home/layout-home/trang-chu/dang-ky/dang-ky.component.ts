import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  constructor() { }
  DangKy(val) {
    console.log(val);
  }
  ngOnInit() {
  }

}
