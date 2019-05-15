import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() itemGhe;
  // @Input() soGhe; 
  @Output() emitGhe = new EventEmitter; 
  constructor() { }
  datghe() {
    this.itemGhe.status = !this.itemGhe.status; 
    this.emitGhe.emit(this.itemGhe);
    // if (this.status == false) {
    //   if (this.soGheDangDat > this.soGhe) {
    //     alert("Không được chọn quá số ghế đã đặt")
    //     return null;
    //   }
    //   else {

    //     this.status = !this.status;
    //     this.emitGhe.emit(this.status);
    //   }
    // }
    // else {
    //   if (this.status == true) {

    //     this.status = !this.status;
    //     this.emitGhe.emit(this.status);
    //   }
    // }


  }
  ngOnInit() {
  }

}
