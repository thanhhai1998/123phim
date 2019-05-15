import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import { PhimService } from 'src/app/service/phim.service';
import { Phim } from 'src/app/models/Phim';
declare var $: any;

@Component({
  selector: 'app-dangchieu',
  templateUrl: './dangchieu.component.html',
  styleUrls: ['./dangchieu.component.scss'],
})
export class DangchieuComponent implements OnInit, AfterViewInit {

  constructor(private dsphimSV: PhimService) { }

  DanhSachPhimDangChieu: Phim[] = [];

  ngOnInit() {
    this.dsphimSV.LayDSPhim().subscribe(
      (kq: any) => {
        this.DanhSachPhimDangChieu = kq;
      }
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });

    }, 400);
  }
}
