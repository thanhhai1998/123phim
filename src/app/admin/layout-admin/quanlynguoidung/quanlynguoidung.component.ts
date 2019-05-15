import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { NguoiDung } from 'src/app/models/NguoiDung';

@Component({
  selector: 'app-quanlynguoidung',
  templateUrl: './quanlynguoidung.component.html',
  styleUrls: ['./quanlynguoidung.component.scss']
})
export class QuanlynguoidungComponent implements OnInit {

  constructor(private nguoidungservice:  UserService) { }
  DSNguoiDung: NguoiDung[] = [];
  ngOnInit() {
    this.nguoidungservice.LayDSNguoiDung().subscribe(
      (kq: any) => {
        this.DSNguoiDung = kq;
      }
    );
  }

}
