import { Component, OnInit, Input } from '@angular/core';
import {PhimService} from '../../../service/phim.service';
import { Phim } from 'src/app/models/Phim';

@Component({
  selector: 'app-quanlyphim',
  templateUrl: './quanlyphim.component.html',
  styleUrls: ['./quanlyphim.component.scss']
})
export class QuanlyphimComponent implements OnInit {
  constructor(private phimservice: PhimService) { }

  DSQLPhim: Phim[] = [];

  ngOnInit() {
    this.phimservice.LayDSPhim().subscribe(
      (kq: any) => {
        this.DSQLPhim = kq;
        // this.DSQLPhim.push(kq);
        // console.log(this.DSQLPhim);
      }
    );
  }

}
