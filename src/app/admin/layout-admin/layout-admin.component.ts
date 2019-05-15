import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {
  QuanLyStatus = 'QLphim';
  constructor() { }
  ChonLoaiQL(val) {
    this.QuanLyStatus = val;
  }
  ngOnInit() {
  }

}
