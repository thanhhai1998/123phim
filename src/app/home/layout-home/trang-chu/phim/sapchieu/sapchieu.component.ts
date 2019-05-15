import { Component, OnInit, AfterViewInit } from '@angular/core';
// import $ from 'jquery';
// declare var $: any;
@Component({
  selector: 'app-sapchieu',
  templateUrl: './sapchieu.component.html',
  styleUrls: ['./sapchieu.component.scss']
})
export class SapchieuComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // $('.owl-carousel').owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    //   responsive: {
    //     0: {
    //       items: 3
    //     },
    //     600: {
    //       items: 4
    //     },
    //     1000: {
    //       items: 5
    //     }
    //   }
    // });
  }
}
